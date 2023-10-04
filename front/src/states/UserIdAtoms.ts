import { atom } from 'recoil';

const userIdFromLocalStorage = localStorage.getItem("userId");
export const userIdState = atom<number>({
  key: 'userId',
  default: userIdFromLocalStorage ? parseInt(userIdFromLocalStorage, 10) : 4
});

// function useUserId() {
//     return useRecoilValue(userIdState);
// }

// export default useUserId;