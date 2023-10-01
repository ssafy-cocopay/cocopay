import { atom } from "recoil";
import { UserInfo } from "@/types/user";

export const userInfoState = atom<UserInfo>({
  key: "userInfoState",
  default: {
    name: "",
    birth: "",
    company: "",
    tel: "",
    password: "",
  },
});
