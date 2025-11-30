import React from "react";
import { cn } from "@/lib/utils";

const Anchor = ({ children, className,href }) => {
  return (
    <a href={href}
      className={cn(
        "px-6 py-3 capitalize bg-[#089675] rounded-sm text-white font-semibold hover:bg-[#12b891] inline-block",
        className
      )}
    >
      {children}
    </a>
  );
};

export default Anchor;
