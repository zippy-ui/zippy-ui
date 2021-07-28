const path = require('path');

const sharedRules = {
  'default-case': 'off',
  'no-console': 'off',
  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': 'off',
  'no-param-reassign': 'off',
  'consistent-return': ['error', { treatUndefinedAsUnspecified: false }],
};

const sharedReactRules = {
  'react/jsx-filename-extension': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react-hooks/exhaustive-deps': 'off',
  'react/require-default-props': 'off',
};

module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    jest: true,
  },

  overrides: [
    {
      files: ['*.js'],
      extends: ['airbnb-base', 'plugin:prettier/recommended'],

      parserOptions: {
        ecmaVersion: 2020,
      },

      rules: sharedRules,
    },
    {
      files: ['*.ts'],

      extends: ['airbnb-typescript/base', 'plugin:prettier/recommended'],

      parserOptions: {
        project: path.resolve('./tsconfig.json'),
      },

      rules: sharedRules,
    },
    {
      files: ['*.tsx'],

      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:prettier/recommended',
      ],

      parserOptions: {
        project: path.resolve('./tsconfig.json'),
      },

      rules: Object.assign(sharedRules, sharedReactRules),
    },
  ],
};
