module.exports = {
  collectCoverageFrom:['<rootDir>/src/**/*.{ts, tsx}'],
  coverageDirectory:'coverage',
  setupFilesAfterEnv: [
'<rootDir>/src/config/jest-setup.ts'
  ],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!@element)/'],
  transform:{
    '^.+\\.[jt]sx?$':'babel-jest'
  }
}
