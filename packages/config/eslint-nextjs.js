module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@next/next/recommended',
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
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
    },
  ],
  ignorePatterns: ['public', '.next', 'coverage', 'dist', '.turbo'],
};
