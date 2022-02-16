module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:storybook/recommended',
    './eslint-base',
  ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
