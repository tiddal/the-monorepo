import { VariantProps } from '@stitches/core';
import { css } from '../tokens';

export const Button = css({
  px: '$10',
  variants: {
    size: {
      big: {
        px: '$40',
      },
      small: {
        px: '$1',
      },
    },
  },
});

export type ButtonProps = VariantProps<typeof Button>;
