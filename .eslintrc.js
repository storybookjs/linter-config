module.exports = {
  ignorePatterns: ['node_modules', 'dist', '!.vscode'],
  extends: [
    // order is important!
    'eslint-config-semistandard',
    'plugin:@eslint-community/eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@cspell/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    // order is important!
    '@typescript-eslint',
    'html',
    'react',
    'file-progress',
    'json-format',
  ],
  rules: {
    '@eslint-community/eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    '@eslint-community/eslint-comments/no-unused-disable': 'error',
    'file-progress/activate': 1,
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/export': 'error',
    'import/extensions': [
      'error',
      'never',
      {
        ignorePackages: true,
        json: 'always',
        md: 'always',
        svg: 'always',
        tag: 'always',
      },
    ],
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'warn',
    'import/order': 'error',
    'prefer-destructuring': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
};
