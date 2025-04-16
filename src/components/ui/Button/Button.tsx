"use client";

import React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Butonun görünen etiketi */
  label: string;
  /** Buton tipi */
  variant?: "primary" | "secondary" | "borderless";
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

/** UI butonu - birincil, ikincil ve bağlantı şeklinde kullanılabilir */
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "md",
  isDisabled = false,
  className,
  ...rest
}) => {
  const baseBtn = "rounded-full font-bold transition-all";
  const sizeClasses: Record<string, string> = {
    xsm: "py-2 sm:py-2.5 px-6 text-xs",
    sm: "py-2 sm:py-2.5 px-8 text-sm",
    md: "py-3 px-10 text-base",
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
      ? "bg-grey text-white cursor-not-allowed"
      : "bg-red-500 text-white hover:brightness-110 active:brightness-100 cursor-pointer",
    secondary: isDisabled
      ? "bg-white border-2 border-grey text-grey cursor-not-allowed"
      : "bg-white border-2 border-secondary text-secondary hover:shadow-buttonHover active:bg-secondary active:text-white",
    borderless: isDisabled
      ? "bg-transparent text-grey underline cursor-not-allowed"
      : "bg-transparent text-primary underline",
  };

  const finalClass = clsx(baseBtn, sizeClasses[size], variantClasses[variant], className);

  return (
    <button className={finalClass} disabled={isDisabled} {...rest}>
      {label}
    </button>
  );
};

export default Button;
