module.exports = {
  testEnvironment: 'node',
  setupFiles: [
    '<rootDir>/test/config/setup.ts'
  ],
  testMatch: [
    '<rootDir>/test/specs/unit/**/*'
  ],
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  collectCoverage: true,
  mapCoverage: true,
  coverageDirectory: '<rootDir>/coverage/unit',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ]
}
