module.exports = {
  printWidth: 120,
  tabWidth: 2,
  bracketSpacing: true,
  trailingComma: 'es5',
  singleQuote: true,
  overrides: [
    {
      files: '*.html',
      options: { parser: 'html' },
    },
    {
      files: '*.json',
      singleQuote: false,
      options: { parser: 'json' },
    },
  ],
};
