/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      REACT_APP_SERVER_URL: 'string';
      REACT_APP_BASE_URL: 'https://j9b208.p.ssafy.io';
    }
  }

// 왜 이렇지? 5