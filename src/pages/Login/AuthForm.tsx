import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router"; // Or 'next/navigation' if using Next.js

interface AuthFormInputs {
  email: string;
  password: string;
}

const AuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AuthFormInputs>();

  const onSubmit: SubmitHandler<AuthFormInputs> = async (data) => {
    setApiError(null);
    try {
      const response = await fetch(
        "https://task-api-eight-flax.vercel.app/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );
      const result = await response.json();
      reset();
      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      // Store token and redirect
      localStorage.setItem("token", result.token);
      localStorage.setItem("user_email", result.email);

      navigate("/dashboard");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Unexpected error occurred";
      setApiError(message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-8 p-6">
      <div className="space-y-2 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-primary">
          Welcome Back
        </h2>
        <p className="text-secondary text-sm">
          Enter your credentials to access the dashboard
        </p>
      </div>

      {apiError && (
        <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg">
          {apiError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Email Address
          </label>
          <input
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
            placeholder="name@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1 relative">
          <label className="text-xs font-semibold uppercase tracking-wider text-secondary">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
        </div>

        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
