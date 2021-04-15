module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  extends: ['react-app', 'plugin:jsx-a11y/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['jsx-a11y', 'react', 'react-hooks', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-console': 'off',
    'react/prop-types': 0,
    'prettier/prettier': ['error'],
    'compat/compat': 'off',
  },
};