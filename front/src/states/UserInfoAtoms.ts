import { atom } from "recoil";

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    name: "",
    birth: "",
    company: "",
    tel: "",
    password: "",
  },
});
