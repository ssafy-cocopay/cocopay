import axios, { Axios } from "axios";

// to.. 리액트 쿼리 느낌코딩 예정 서영이와 혜혀니
// Axios를 사용하여 기본 설정을 가진 인스턴스 생성
const APP_SERVER_URL = "https://j9b208.p.ssafy.io";
// const APP_SERVER_URL = "http://localhost:3000";
// const APP_SERVER_URL = "http://192.168.219.102:3000";

const instance: Axios = axios.create({
  baseURL: `${APP_SERVER_URL}/api`, // 여기 오류나면 https://j9b208.p.ssafy.io/api로 변경
  withCredentials: true, //  요청과 응답에 쿠키 포함
  headers: {
    "Content-Type": "application/json",
    userId: 2 || undefined, // 여기 오류나면 userId 냅다 1로 해보기
  },
});

export { instance };
