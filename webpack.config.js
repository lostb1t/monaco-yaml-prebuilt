import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default {
  entry: {
    'monaco-editor': './src/editor.js',
  },
  output: {
    publicPath: 'https://esm.sh/gh/lostb1t/monaco-yaml-prebuilt/dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        type: 'asset',
      }
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['json', 'yaml'], // Add supported languages here
      customLanguages: [
        {
          label: 'yaml',
          entry: 'monaco-yaml',
          worker: {
            id: 'monaco-yaml/yamlWorker',
            entry: 'monaco-yaml/yaml.worker',
          },
        },
      ],
    }),
  ],
};