import { atom } from "recoil";

interface User {
  name: string;
  birth: string;
  company: string;
  tel: string;
  password: string;
}

export const UserInfoAtom = atom<User>({
  key: "UserInfoAtom",
  default: {} as User,
});
