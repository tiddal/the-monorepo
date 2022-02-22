import { styled } from '@stitches/react';
import { ComponentPropsWithRef } from 'react';
import { Button as ButtonCSS } from 'ui-styles';

const StyledButton = styled('button', ButtonCSS);

export type ButtonProps = ComponentPropsWithRef<typeof StyledButton>;

export const Button = ({ children, ref, ...props }: ButtonProps) => (
  <StyledButton ref={ref} {...props}>
    {children}
  </StyledButton>
);

Button.displayName = 'Button';
