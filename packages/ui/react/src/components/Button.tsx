import { HTMLAttributes, ReactNode } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

Button.displayName = 'Button';
