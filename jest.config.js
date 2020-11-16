module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: [
    './test/mocks/dom.mock.ts',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.ts'
  ],
  coverageDirectory: 'coverage',
};