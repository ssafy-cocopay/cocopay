import axios, { Axios } from "axios";

// to.. 리액트 쿼리 느낌코딩 예정 서영이와 혜혀니
// Axios를 사용하여 기본 설정을 가진 인스턴스 생성
const APP_SERVER_URL = "https://j9b208.p.ssafy.io";

// 프록시 있고 로컬로 해야 로컬 디벨롭 가능
// const APP_SERVER_URL = "http://localhost:3000";
// const APP_SERVER_URL = "http://192.168.219.102:3000";

// const userIdFromLocalStorage = localStorage.getItem("userId");

// TODO:  여긴 나중에 씁시다 지금은 화면 개발용 테스트 userId 필요함
// const userId = userIdFromLocalStorage
//   ? parseInt(userIdFromLocalStorage, 10)
//   : 2;

const userId = 2;

const instance: Axios = axios.create({
  baseURL: `${APP_SERVER_URL}/api`, // 여기 오류나면 https://j9b208.p.ssafy.io/api로 변경
  withCredentials: true, //  요청과 응답에 쿠키 포함
  headers: {
    "Content-Type": "application/json",
    userId, // 여기 오류나면 userId 냅다 1로 해보기
  },
});

export { instance };
