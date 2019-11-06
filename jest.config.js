module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./setupTests.js'],
  moduleNameMapper: {
    'src(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  },
};
