import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  JSXElementConstructor,
} from 'react';

export type StyledProps<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = Omit<ComponentProps<C>, 'css'>;

export type StyledPropsWithRef<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = Omit<ComponentPropsWithRef<C>, 'css'>;

export type StyledPropsWithoutRef<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = Omit<ComponentPropsWithoutRef<C>, 'css'>;
