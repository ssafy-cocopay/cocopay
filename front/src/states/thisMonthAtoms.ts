import { atom, useRecoilValue } from "recoil";

export const thisMonthState = atom({
  key: "thisMonth",
  default: new Date().getMonth() + 1,
});

function useThisMonth() {
  return useRecoilValue(thisMonthState);
}
export default useThisMonth;
