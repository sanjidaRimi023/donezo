import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes, ElementType, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" ;
  isLoading?: boolean;
  icon?: ElementType;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  icon: Icon,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary: "bg-[#174E33] bg-gradient-to-r from-[#174E33] via-[#19603f] to-[#11A660] text-white hover:opacity-90",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  
    outline: "border-2 border-[#174E33] bg-transparent text-[#174E33] hover:bg-[#174E33]/5",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes = {
    sm: "px-3 py-1 rounded-3xl",
    md: "px-6 py-2 rounded-full", 

  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {Icon && <Icon className="w-4 h-4 mr-2" />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;