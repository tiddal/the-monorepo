module.exports = {
  extends: require.resolve('config/eslint-react-library'),
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
