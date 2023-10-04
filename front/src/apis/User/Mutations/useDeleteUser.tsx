import { useMutation } from "@tanstack/react-query"; // 1. 리액트쿼리 기본 제공값 -> .mutate로 입력한 값 담는 곳 (?)
import { deleteUser } from "../userAPI";

const useDeleteUser = () => {
  return useMutation(() => deleteUser(), {
    onSuccess: () => {
      console.log("회원탈퇴 성공");
    },
    onError: () => {
      console.log("회원탈퇴 실패");
    },
  });
};

export { useDeleteUser };
