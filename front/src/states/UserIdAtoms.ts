import { atom, useRecoilValue } from 'recoil';

export const userIdState = atom({
  key: 'userId',
  default: 1, // null으로 해야하나?
});

function useUserId() {
    return useRecoilValue(userIdState);
}

export default useUserId;