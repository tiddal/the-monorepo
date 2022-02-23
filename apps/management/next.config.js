const withTM = require('next-transpile-modules')(['ui-react', 'ui-styles']);

module.exports = withTM({
  reactStrictMode: true,
});
