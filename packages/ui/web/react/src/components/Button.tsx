import { styled } from '@stitches/react';
import { ElementRef, forwardRef } from 'react';
import { Button as ButtonCSS } from 'ui-styles';

const StyledButton = styled('button', ButtonCSS);

export type StyledComponentProps<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = Omit<React.ComponentProps<C>, 'css'>;

export type ButtonProps = StyledComponentProps<typeof StyledButton>;

export const Button = forwardRef<ElementRef<typeof StyledButton>, ButtonProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledButton ref={forwardedRef} {...props}>
      {children}
    </StyledButton>
  ),
);

Button.displayName = 'Button';
