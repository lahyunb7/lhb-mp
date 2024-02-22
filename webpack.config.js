const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 빌드 모드 설정 (development 또는 production)
  entry: './src/main.js', // 진입점(entry point) 파일 설정
  output: {
    path: path.resolve(__dirname, 'dist'), // 빌드 결과물이 저장될 디렉토리 경로
    filename: 'bundle.js', // 빌드 결과물 파일 이름
  },
  module: {
    rules: [
      // 로더(loader) 설정
      {
        test: /\.js$/, // .js 확장자를 가진 파일들에 대해서
        exclude: /node_modules/, // node_modules 디렉토리 아래 있는 파일들은 제외하고
        use: {
          loader: 'babel-loader', // babel-loader를 사용하여
          options: {
            presets: ['@babel/preset-env'], // @babel/preset-env 프리셋을 사용하여 ES6+ 코드를 변환
          },
        },
      },
    ],
  },
};