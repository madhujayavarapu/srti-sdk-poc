/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // ts-jest configuration goes here
        tsconfig: './tsconfig.test.json'
      },
    ],
  },
  moduleNameMapper: {
    '\\.(scss|css)$': '<rootDir>/__mocks__/styleMock.js',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover']
};