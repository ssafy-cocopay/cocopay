import { atom } from "recoil";

export const IsPurchasedAtom = atom<boolean>({
  key: "IsPurchasedAtom",
  default: false,
});
