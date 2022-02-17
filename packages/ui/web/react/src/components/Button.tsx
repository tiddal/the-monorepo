import { styled, ComponentProps } from '@stitches/react';
import { ElementRef, forwardRef } from 'react';
import { Button as ButtonCSS } from 'ui-styles';

const StyledButton = styled('button', ButtonCSS);

export type StyledComponentProps<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = Omit<ComponentProps<C>, 'css'>;

export type ButtonProps = any;

export const Button = forwardRef<ElementRef<typeof StyledButton>, ButtonProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledButton ref={forwardedRef} {...props}>
      {children}
    </StyledButton>
  ),
);

Button.displayName = 'Button';
