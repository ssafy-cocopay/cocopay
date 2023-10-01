import { useMutation } from "@tanstack/react-query"; // 1. 리액트쿼리 기본 제공값 -> .mutate로 입력한 값 담는 곳 (?)
import { addPriority } from "../userAPI";

const useAddPriority = () => {
  return useMutation((recommendType: number) => addPriority(recommendType), {
    onSuccess: () => {
      console.log("우선순위 선택", addPriority);
    },
    onError: () => {
      console.log("우선순위 선택 실패..", addPriority);
    },
  });
};

export { useAddPriority };
