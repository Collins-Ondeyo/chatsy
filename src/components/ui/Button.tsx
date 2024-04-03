import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children: React.ReactNode;
}

const Button=forwardRef<HTMLButtonElement, ButtonInterface>(
    ({className, children, ...rest}, ref)=>{
        return <button
            {...rest}
            className={twMerge("border-none outline-none flex flex-row items-center justify-center gap-2 w-full py-2 transition-colors duration-100 ease-in-out", className)}
        >{children}</button>
    }
);

export default Button;