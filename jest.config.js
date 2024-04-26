module.exports = {
  // Outras configurações do Jest...
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(svg)$': '<rootDir>/__mocks__/fileMock.js', // Caminho para o svg-transform-loader
  },
  testEnvironment: 'jsdom', // Definindo o ambiente de teste como jsdom
};