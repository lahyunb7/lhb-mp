#!/bin/bash

# nvm 설정 로드
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # 이 명령으로 nvm을 로드합니다.
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # 이 명령으로 nvm bash_completion을 로드합니다.

# Node.js 16 버전 설치
nvm install 16

# npm 패키지 설치
npm install --save-dev babel-loader @babel/core @babel/preset-env
npm install --save-dev html-webpack-plugin
npm install -g http-server
npm install webpack webpack-cli --save-dev
npm run build
sudo http-server -p 80