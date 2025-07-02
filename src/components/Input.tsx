"use client";

import { cn } from "@/lib/classMerge";
import { EyeIcon, EyeOff, X } from "lucide-react";
import { forwardRef, InputHTMLAttributes, useState } from "react";

type InputProps = {
  clearable?: boolean;
  showArrows?: boolean;
  onValueChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      clearable,
      className,
      type,
      value,
      showArrows = false,
      onValueChange,
      ...props
    },
    ref
  ) => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [currentValue, setValue] = useState(value ?? "");
    const isPasswordType = type === "password";
    const onChangeHandler = (newValue: string) => {
      setValue(newValue);
      onValueChange?.(newValue);
    };
    return (
      <div className="relative">
        <input
          ref={ref}
          {...props}
          type={isPasswordType && visiblePassword ? "text" : type}
          value={currentValue}
          onChange={(e) => onChangeHandler(e.target.value)}
          className={cn(
            "w-full h-10 border border-gray-300 rounded-md  px-2 outline-none focus-visible:ring focus-visible:ring-primary ",
            isPasswordType && "pr-10",
            isPasswordType && "pr-14",
            clearable && currentValue && "pr-10",
            !showArrows && "hide-arrows",
            className
          )}
        />
        <div className="h-full absolute flex items-center gap-1 top-1/2 -translate-y-1/2 right-3">
          {clearable && currentValue && (
            <button
              onClick={() => onChangeHandler("")}
              type="button"
              aria-label="clear"
            >
              <X size={20} />
            </button>
          )}
          {isPasswordType && (
            <button
              onClick={() => setVisiblePassword((p) => !p)}
              type="button"
              area-label="Toggle password visibility"
            >
              {visiblePassword ? <EyeIcon size={20} /> : <EyeOff size={20} />}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
