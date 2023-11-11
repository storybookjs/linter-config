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
    'html',
    'react',
    '@typescript-eslint',
    'file-progress',
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
    'import/no-unresolved': 'off',

    'react/prop-types': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],

    'default-case': 'error',
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed'],
    'no-caller': 'error',
    'no-labels': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off',
    'prefer-destructuring': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    curly: ['error', 'all'],
    eqeqeq: 'error',
    radix: 'error',
    camelcase: ['error', { ignoreImports: true, ignoreGlobals: true, allow: ['^.+_.+'] }],

    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-types': 'warn',
  },
  overrides: [
    {
      files: ['*.stories.*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
};
