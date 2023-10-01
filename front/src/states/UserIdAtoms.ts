import { atom } from 'recoil';

export const userIdState = atom({
  key: 'userId',
  default: 1, // null으로 해야하나?
});