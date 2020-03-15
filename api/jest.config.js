module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  preset: '@shelf/jest-mongodb',
  testMatch: ['<rootDir>/test/**/*.test.js'],
  coverageReporters: ['text-summary', 'lcov'],
  setupFiles: ['./test/setupTests.js'],
};
