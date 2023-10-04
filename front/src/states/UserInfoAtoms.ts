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


export const priorityAtom = atom({
  key: "priorityAtom",
  default: "priority"
})

export const myPagePriorityAtom = atom({
  key: "myPagePriorityAtom",
  default: 2
})