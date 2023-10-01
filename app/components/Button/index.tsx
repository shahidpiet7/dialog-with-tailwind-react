import { FC, useState } from 'react';
import {cn} from "@/app/utils";

interface ButtonPropsTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText?: string;
  className?: string;
};

const Button: FC<ButtonPropsTypes> = ({
  buttonText,
  className,
  ...props
}: ButtonPropsTypes) => {

  return (
    <button className={cn(`py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-lg`, className)}
      {...props}
    >
      {buttonText}
    </button>
  )
};
  
export default Button;
