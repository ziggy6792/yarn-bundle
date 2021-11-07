// eslint-disable-next-line no-undef
module.exports = {
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  // Removed this because it seems to slow down linting
  // parserOptions: {
  //   tsconfigRootDir: __dirname,
  //   sourceType: 'module', // Enable the use of imports
  //   project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
  //   ecmaVersion: 11,
  // },
  plugins: ['@typescript-eslint', 'prettier'],

  rules: {
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-console': 'warn',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'func-names': 'off',
    'no-restricted-imports': ['error', { patterns: ['../*', '..'] }],
    'max-len': [
      'error',
      160,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: false,
        ignoreTemplateLiterals: false,
      },
    ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
  },
  // settings: {
  //   'import/resolver': {
  //     alias: [['/', '/build']],
  //   },
  // },
};
