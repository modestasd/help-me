module.exports = {
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {'^.+\\.tsx?$': 'ts-jest',},
  moduleDirectories: [
      'node_modules',
      'src'
  ],
  moduleFileExtensions: [
      'js',
      'json',
      'jsx',
      'ts',
      'tsx'
  ],
  moduleNameMapper: {'src/(.*)': '<rootDir>/src/$1'},
  preset: 'ts-jest',
  testEnvironment: 'node',
};
