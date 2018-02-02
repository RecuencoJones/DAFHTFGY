module.exports = Object.assign({}, require('./jest.unit'), {
  testMatch: [
    '<rootDir>/test/specs/e2e/**/*'
  ],
  coverageDirectory: '<rootDir>/coverage/e2e'
})
