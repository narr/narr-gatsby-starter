module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        // NOTE: currently gatsby uses core-js version 2 internally
        // to avoid the waring message, set the version explicitly
        corejs: 2,
        targets: ['defaults'],
      },
    ],
    ['react-app', { flow: false, typescript: true }],
  ],
};
