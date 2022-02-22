import { VariantProps } from '@stitches/core';
import { css } from '../tokens';

export const Button = css({
  padding: '$5',
});

export type ButtonProps = VariantProps<typeof Button>;
