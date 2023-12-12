module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['../Shared'],
        alias: {
          '@shared': '../Shared',
          'react-native': './node_modules/react-native',
          react: './node_modules/react',
        },
      },
    ],
  ],
};
