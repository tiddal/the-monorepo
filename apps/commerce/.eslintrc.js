module.exports = {
  root: true,
  extends: require.resolve('config/eslint-nextjs'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
