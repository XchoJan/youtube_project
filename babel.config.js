module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'src': './src',
          'screens': './src/screens',
          'helpers': './src/helpers',
          'components': './src/components'
        },
      },
    ],
  ],
};
