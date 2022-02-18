import { styled } from '@stitches/react';
import { Button as ButtonCSS } from 'ui-styles';
import { StyledPropsWithRef } from '../utils';

const StyledButton = styled('button', ButtonCSS);

export type ButtonProps = StyledPropsWithRef<typeof StyledButton>;

export const Button = ({ children, ref, ...props }: ButtonProps) => (
  <StyledButton ref={ref} {...props}>
    {children}
  </StyledButton>
);

Button.displayName = 'Button';
