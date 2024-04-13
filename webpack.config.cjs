const path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.cjs',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',     // 최신 JavaScript 기능을 변환
              '@babel/preset-typescript'  // TypeScript 지원
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],  // .ts와 .js 파일 모두 해석
  },
  target: 'node'
};
