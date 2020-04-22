module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prefer-stateless-function': 'warn',
    'react/jsx-one-expression-per-line': 'warn',
    'react/prop-types': 'error',
    'react/destructuring-assignment': 'warn',
    'prefer-destructuring': 'warn',
    'no-unused-vars': ['error', {'argsIgnorePattern': '^_'}]
  }
}
