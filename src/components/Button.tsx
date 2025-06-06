import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  return (
    <button
      className={clsx(
        'px-6 py-2 rounded-full font-sans font-semibold transition-all duration-200',
        variant === 'primary' && 'bg-[#2C3E50] text-white hover:bg-[#D6B77A] hover:text-[#2C3E50]',
        variant === 'secondary' && 'bg-[#D6B77A] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
