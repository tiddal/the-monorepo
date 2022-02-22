import { createStitches, ScaleValue } from '@stitches/core';
import { colors } from './colors';
import { space } from './space';

export const { css, config } = createStitches({
  theme: {
    colors,
    space,
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
});
