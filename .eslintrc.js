module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'next/core-web-vitals',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-cycle': 'warn',
    'import/prefer-default-export': 'off',
    'newline-before-return': 'warn',
    'no-param-reassign': ['error', { props: false }],
    'react/default-props-match-prop-types': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-fragments': 'off',
    'react/jsx-indent': ['warn', 2, { indentLogicalExpressions: true }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
  },
};
