"use client";

import React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Butonun görünen etiketi */
  label: string;
  /** Buton tipi */
  variant?: "primary" | "secondary" | "outline";
  /** Boyut seçeneği */
  size?:
    | "xsm"
    | "sm"
    | "md"
    | "lg"
    | "xlg"
    | "2xlg"
    | "smBlockBtn"
    | "baseBlockBtn"
    | "lgBlockBtn"
    | "xlBlockBtn";
  /** Pasif hale getir */
  isDisabled?: boolean;
}

/** UI butonu - birincil, ikincil ve outline şeklinde kullanılabilir */
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "md",
  isDisabled = false,
  className,
  ...rest
}) => {
  const baseBtn = "rounded-md font-bold leading-6 transition-all";
  const sizeClasses: Record<string, string> = {
    xsm: "py-2 sm:py-2.5 px-6 text-xs",
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-8 text-base",
    lg: "py-3 px-10 text-lg",
    xlg: "py-4 px-12 text-xl",
    "2xlg": "py-4 px-14 text-2xl",
    smBlockBtn: "py-2 sm:py-2.5 text-sm block w-full",
    baseBlockBtn: "py-3 text-base block w-full",
    lgBlockBtn: "py-3 text-lg block w-full",
    xlBlockBtn: "py-4 text-xl block w-full",
  };

  const variantClasses = {
    primary: isDisabled
      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
      : "bg-red-500 text-white hover:brightness-110 active:brightness-100 cursor-pointer active:text-white",
    secondary: isDisabled
      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
      : "bg-gray-900 text-white hover:brightness-110 active:bg-gray-900 cursor-pointer active:text-white",
    outline: isDisabled
      ? "bg-transparent text-gray-400 border border-gray-500 hover:border-transparent hover:bg-gray-500 hover:text-gray-100 cursor-not-allowed"
      : "bg-transparent text-gray-900 border border-gray-500 hover:border-transparent hover:bg-gray-900 hover:text-white cursor-pointer",
  };

  const finalClass = clsx(baseBtn, sizeClasses[size], variantClasses[variant], className);

  return (
    <button className={finalClass} disabled={isDisabled} {...rest}>
      {label}
    </button>
  );
};

export default Button;
