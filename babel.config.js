module.exports = (api) => {
  const isTest = api.env('test');

  return {
    'presets': [
      ['@babel/preset-env', isTest
        ? {
          targets: {
            node: 'current'
          }
        } : {
          modules: false,
          loose: true
        }
      ],
      '@babel/preset-react'
    ],
    'plugins': [
      ["@babel/plugin-proposal-decorators", {
        "legacy": true
      }],
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      ["@babel/plugin-proposal-class-properties", {
        "loose": true
      }],
      '@babel/plugin-proposal-json-strings',
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-runtime',
      "@babel/plugin-transform-react-jsx-source",
      'lodash',
      'react-hot-loader/babel'
    ]
  };
};
