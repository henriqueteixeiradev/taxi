import React, { forwardRef, Ref } from "react";

interface InputProps {
  error: string;
  code: string;
  name: string;
  type: string;
}

const InputPhone = forwardRef<HTMLInputElement, InputProps>(
  ({ error, code, type, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div>
        <div className="flex flex-col justify-center  relative">
          <span className="absolute text-white font-bold left-[1.063rem]">
            {code}
          </span>
          <input
            className="py-[1.563rem] inset-shadow bg-brand-cards text-[0.938rem] px-[3.6rem] rounded-[0.938rem]"
            placeholder="77 123 4578"
            ref={ref}
            type={type}
            {...props}
          />
        </div>
        {error && <p className="text-red-500 text-xs ml-8 mt-1">{error}</p>}
      </div>
    );
  }
);

InputPhone.displayName = "InputPhone";

export default InputPhone;
