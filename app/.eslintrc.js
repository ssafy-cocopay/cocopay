// "File is a CommonJS module; it may be converted to an ES module"  
// 여전히 많은 프로젝트에서 CommonJS 스타일(module.exports)을 사용하고 있기에 무시하기
module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  parser: '@babel/eslint-parser',
};
