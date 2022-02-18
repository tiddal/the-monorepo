import { styled } from '@stitches/react';
import { forwardRef, ElementRef } from 'react';
import { Button as ButtonCSS } from 'ui-styles';
import { StyledProps } from '../utils';

const StyledButton = styled('button', ButtonCSS);

export type ButtonProps = StyledProps<typeof StyledButton>;

export const Button = forwardRef<ElementRef<typeof StyledButton>, ButtonProps>(
  ({ children, ...props }, ref) => (
    <StyledButton ref={ref} {...props}>
      {children}
    </StyledButton>
  ),
);

Button.displayName = 'Button';
