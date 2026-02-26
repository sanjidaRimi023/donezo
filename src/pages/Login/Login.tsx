import LoginAnimation from "../../components/LoginAnimation";
import AuthForm from "./AuthForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-center items-center bg-secondary p-12  relative overflow-hidden">
        <LoginAnimation/>
      </div>

      {/* Right Side: Form */}
      <div className="flex items-center justify-center p-8 lg:p-16">
        <AuthForm />
      </div>
    </main>
  );
}