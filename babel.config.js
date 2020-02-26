//const { BabelConfig } = require('@nexys/babelsetup');

const BabelConfig = {
  presets: [
    "@babel/preset-react",'@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-transform-arrow-functions',

    ['@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-react-jsx'
    // '@babel/plugin-transform-async-to-generator',
  ]
}

module.exports = BabelConfig;