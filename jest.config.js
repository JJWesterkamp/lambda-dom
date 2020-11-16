module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: [
    './test/mocks/dom.mock.ts',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.ts'
  ],
  coverageDirectory: 'coverage',
};