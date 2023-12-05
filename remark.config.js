import remarkPresetLintRecommended from 'remark-preset-lint-recommended'


export default {
  plugins: [remarkPresetLintRecommended, ['remark-lint-list-item-indent', false]],
};
