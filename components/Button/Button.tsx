import React from "react";

interface ButtonProps {
  href: string;
  className?: string;
  variant: "outline-yellow" | "fullfilled-yellow" | "fullfilled-black";
  children: React.ReactNode;
  notpill?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  href,
  className = "",
  variant,
  children,
  notpill = false,
}) => {
  const varians: Record<string, string> = {
    "outline-yellow":
      "border border-yellow-500 text-yellow-500 hover:border-yellow-300 hover:text-yellow-300",
    "fullfilled-yellow": "bg-yellow-500 text-black hover:bg-yellow-300",
    "fullfilled-black": "bg-black text-white hover:bg-opacity-70",
  };

  const pickedVariant = varians[variant];

  return (
    <a
      href={href}
      className={`text-lg px-10 py-3 inline-block ${
        !notpill ? "rounded-full" : ""
      } ${pickedVariant} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
