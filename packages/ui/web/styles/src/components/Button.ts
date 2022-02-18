import { css } from '../tokens';

export const Button = css({
  backgroundColor: '$red500',
  padding: '$10',
  variants: {
    size: {
      small: {
        fontSize: '13px',
        height: '25px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      large: {
        fontSize: '15px',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
    },
    color: {
      violet: {
        backgroundColor: '$purple500',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkviolet',
        },
      },
      gray: {
        backgroundColor: 'gainsboro',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: 'lightgray',
        },
      },
    },
  },
});
