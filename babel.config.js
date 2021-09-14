module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'data-access': './src/data-access',
          domain: './src/domain',
          ioc: './src/ioc',
          ui: './src/ui',
        },
      },
    ],
  ],
};
