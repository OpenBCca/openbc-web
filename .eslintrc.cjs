module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  root: true,
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-console': ['error'],
    complexity: ['error', 7],
    'no-duplicate-imports': ['error'],
    'no-sparse-arrays': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'no-unused-private-class-members': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: [
          'classMethod',
          'classProperty',
          'enumMember',
          'variable',
          'parameter',
          'parameterProperty',
        ],
        format: ['strictCamelCase'],
      },
      {
        selector: ['function'],
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: ['class', 'enum'],
        format: ['StrictPascalCase'],
      },
    ],
    'dot-notation': ['error'],
    eqeqeq: ['error'],
    'max-classes-per-file': ['error', 1],
    'max-depth': ['error', { max: 3 }],
    'no-else-return': ['error'],
    'no-empty': ['error'],
    'no-extra-semi': ['error'],
    'no-shadow': 'off',
    'no-var': ['error'],
    'require-await': 'off',
    'no-unused-vars': 'off',
    'no-redeclare': 'off',
    'no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'class', next: 'class' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'angle-bracket', objectLiteralTypeAssertions: 'never' },
    ],
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-mixed-enums': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/parameter-properties': [
      'error',
      { allow: ['private'], prefer: 'class-property' },
    ],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/require-await': 'error',
    'prettier/prettier': 'error',
  },
};
