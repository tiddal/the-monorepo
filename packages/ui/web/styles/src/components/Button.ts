import { VariantProps } from '@stitches/core';
import { css } from '../tokens';

export const Button = css({
  backgroundColor: '$red500',
  padding: '$10',
});

export type ButtonProps = VariantProps<typeof Button>;
