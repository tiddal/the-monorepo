const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

module.exports = createJestConfig({
  ...require('./jest-base'),
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  collectCoverageFrom: ['**/src/**/*.{js,ts,jsx,tsx}'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
    '^.+\\.jsx?$': 'esbuild-jest',
  },
  coveragePathIgnorePatterns: [],
  coverageThreshold: null,
  rootDir: '.',
});
