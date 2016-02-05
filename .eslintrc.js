module.exports = {
  'env': {
    'es6': true,
    'browser': true,
    'meteor': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'ecmaFeatures': {
    'jsx': true,
    'experimentalObjectRestSpread': true
  },
  'plugins': [
    'react'
  ],
  'globals': {
    'BlazeLayout': true,
    'Documents': true,
    'FlowRouter': true
  },
  'rules': {
    'comma-dangle': [2, 'never'],
    'eqeqeq': [2, 'smart'],
    'indent': [2, 2],
    'linebreak-style': [2, 'unix'],
    'no-multi-spaces': [1, { 'exceptions': { 'VariableDeclarator': true } } ],
    'no-unneeded-ternary': [2],
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'space-infix-ops': [2],
    'space-in-parens': [2, 'always', { 'exceptions': ['{}'] }]
  }
};
