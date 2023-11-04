module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    "react-native/react-native": true
  },
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  overrides: [
    {
      'env': {
        'node': true
      },
      'files': ['*.ts', '*.tsx'],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  'parserOptions': {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    }
  },
  plugins: ['react', 'react-native', 'react-hooks', '@typescript-eslint', "eslint-plugin-import"],
  'rules': {
    'prettier/prettier': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'semi': [
      'error',
      'always'
    ],
    // Typescript rules
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    // React rules
    'react/display-name': 'off',
    'react/prop-types': 'off',
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": "off",
    // React native rules
    "react-native/no-unused-styles": 'error',
    "react-native/no-inline-styles": 'off',
    "react-native/no-single-element-style-arrays": 'warn'
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
