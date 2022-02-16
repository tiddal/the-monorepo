module.exports = {
  extends: require.resolve('config/eslint-nextjs'),
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
