import { useMutation } from "@tanstack/react-query"; // 1. 리액트쿼리 기본 제공값 -> .mutate로 입력한 값 담는 곳 (?)
import { addUser } from "../userAPI";
import { UserInfo } from "@/types/user";
import { useSetRecoilState } from "recoil";
import { userIdState } from "../../../states/UserIdAtoms";

type AddUserResponse = {
  userId: number;
};

const useAddUser = () => {
  // const setUserId = useSetRecoilState(userIdState);
  // const queryCilent = useQueryClient();
  return useMutation((userInfo: UserInfo) => addUser(userInfo), {
    onSuccess: (aa) => {
      console.log("회원 등록!");
      console.log(aa);
      // console.log(data.userId);
      //   setUserId(data.userId);
    },
    onError: () => {
      console.log("회원 등록 실패...");
    },
  });
};

export { useAddUser };
