module.exports = {
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:import/react-native',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'jest',
    'import',
    'react',
    'jsx-a11y',
    'json',
    'html',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: { es6: true, node: true, 'jest/globals': true },
  settings: {
    'import/core-modules': ['enzyme'],
    'import/ignore': ['node_modules\\/(?!@storybook)'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.mjs', '.d.ts'],
        paths: ['node_modules/', 'node_modules/@types/'],
      },
    },
    'html/html-extensions': ['.html'],
  },
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash.isequal',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.mergewith',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.pick',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
        ],
        // catch-all for any lodash modularised. The CVE is listed against the entire family for lodash < 4.17.11
        patterns: ['lodash.*'],
      },
    ],
    'prettier/prettier': ['warn'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'examples/**',
          'examples-native/**',
          '**/example/**',
          '*.js',
          '**/*.test.js',
          '**/*.stories.*',
          '**/scripts/*.js',
          '**/stories/**/*.js',
          '**/__tests__/**/*.js',
          '**/.storybook/**/*.*',
        ],
        peerDependencies: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/default': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: true,
        allowBind: true,
      },
    ],
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/label-has-associated-control': [
      'warn',
      {
        labelComponents: ['CustomInputLabel'],
        labelAttributes: ['label'],
        controlComponents: ['CustomInput'],
        depth: 3,
      },
    ],
    'react/no-unescaped-entities': 'off',
    'jsx-a11y/label-has-for': ['error', { required: { some: ['nesting', 'id'] } }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['A', 'LinkTo', 'Link'],
        specialLink: ['overrideParams', 'kind', 'story', 'to'],
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__STORYBOOK_CLIENT_API__',
          '__STORYBOOK_ADDONS_CHANNEL__',
          '__STORYBOOK_STORY_STORE__',
        ],
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // would prefer to enable this
    '@typescript-eslint/no-use-before-define': 'off', // this is duplicated
    '@typescript-eslint/interface-name-prefix': 'off', // I don't agree
  },
};
