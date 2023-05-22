const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.ts", // 초기 파일 경로
  output: {
    filename: "bundle.js", // js 파일 이름 설정
    path: path.resolve("./dist"), // 빌드 결과물을 생성할 경로(절대경로)
    // assetModuleFilename: "assets/[name][ext]", // asset 폴더에 있던 파일들은 dist 내부에 asset 폴더 생성후 이름과 확장자를 그대로 사용하여 저장
    clean: true, // 빌드 이전 결과물 제거
  },
};
