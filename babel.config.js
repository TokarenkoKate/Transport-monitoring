module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          assets: './src/assets',
          constants: './src/services/constants',
          utils: './src/services/utils',
          store: './src/store',
          types: './src/types',
          hooks: './src/hooks',
        },
      },
    ],
  ],
};
