import path from 'path';

export default {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    library: {
      type: 'module'
    },
    chunkFormat: 'module'
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node'
};
