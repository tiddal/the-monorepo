import { ComponentPropsWithRef } from 'react';
import { Button as ButtonCSS, ButtonProps as ButtonPropsCSS } from 'ui-styles';
import { styled } from '../stitches.config';

const StyledButton = styled('button', ButtonCSS);

export type ButtonProps = ComponentPropsWithRef<typeof StyledButton> &
  ButtonPropsCSS;

export const Button = ({ children, ref, ...props }: ButtonProps) => (
  <StyledButton ref={ref} {...props}>
    {children}
  </StyledButton>
);

Button.displayName = 'Button';
