import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "px-6 py-3 capitalize bg-[#068466] rounded-sm text-white font-semibold hover:bg-[#0b9777]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
