import { ComponentProps, JSXElementConstructor } from 'react';

export type StyledProps<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = Omit<ComponentProps<C>, 'css'>;
