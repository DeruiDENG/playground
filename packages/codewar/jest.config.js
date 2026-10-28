module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testRegex: ['.*\\.test\\.ts', '.+Tests\\.ts'],
  transformIgnorePatterns: ['node_modules/(?!chai/)'],
};
