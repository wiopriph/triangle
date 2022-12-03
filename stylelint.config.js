module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-rational-order',
  ],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {},
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-case': 'upper',
    'color-hex-length': 'long',
    'color-named': 'never',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'function-url-quotes': 'always',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'no-duplicate-selectors': true,
    'number-leading-zero': 'never',
    'rule-empty-line-before': 'always',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    indentation: 2,
  },
};
