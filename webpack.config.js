import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import webpack from 'webpack';

export default {
  entry: {
    'monaco-editor': './src/editor.js',
  },
  // output: {
  //   publicPath: "auto",
  //  },
  output: {
    publicPath: 'https://esm.sh/gh/lostb1t/monaco-yaml-prebuilt/dist/',
  },
  // externals: {
  //   'react': 'React'
  // },
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
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    })
  ],
};