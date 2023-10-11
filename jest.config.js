const isDevEnv = process.env.NODE_ENV === 'dev';

// skip jest-html-reporter plugin only in dev env
const prodOpts = {
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'SDK Test Report',
        outputPath: '<rootDir>/coverage/test-reports/sdk-report.html',
      },
    ],
  ],
};

/** @type {import('ts-jest').JestConfigWithTsJest} */
let config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // ts-jest configuration goes here
        tsconfig: './tsconfig.test.json',
      },
    ],
  },
  moduleNameMapper: {
    '\\.(scss|css)$': '<rootDir>/__mocks__/styleMock.js',
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageDirectory: '<rootDir>/coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 75,
      statements: 75
    }
  }
};

if (!isDevEnv) {
  config = {
    ...config,
    ...prodOpts,
  };
}

export default config;
