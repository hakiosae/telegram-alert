import path from 'path';

export default {
  entry: './src/app.ts',  // 번들링의 진입점을 설정합니다. 여기서는 'src/app.ts' 파일입니다.
  output: {
    filename: 'bundle.js',  // 생성되는 번들 파일의 이름입니다.
    path: path.resolve(process.cwd(), 'dist'),  // 번들 파일이 저장될 경로입니다.
    library: {
      type: 'module'  // 번들을 ECMAScript 모듈로 출력합니다.
    },
    chunkFormat: 'module'  // 코드 청크를 ECMAScript 모듈 형식으로 출력합니다.
  },
  experiments: {
    outputModule: true  // 실험적인 모듈 출력 기능을 활성화합니다.
  },
  module: {
    rules: [
      {
        test: /\.ts$/,  // '.ts' 확장자를 가진 파일에 적용될 규칙을 정의합니다.
        use: {
          loader: 'babel-loader',  // Babel 로더를 사용하여 TypeScript를 JavaScript로 변환합니다.
          options: {
            presets: [
              '@babel/preset-env',  // 최신 JavaScript로 변환합니다.
              '@babel/preset-typescript'  // TypeScript를 지원합니다.
            ]
          }
        },
        exclude: /node_modules/  // 'node_modules' 디렉터리는 제외합니다.
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],  // 모듈 해석 시 확장자로 '.ts'와 '.js'를 고려합니다.
  },
  target: 'node'  // 번들링 대상 환경을 Node.js로 설정합니다.
};
