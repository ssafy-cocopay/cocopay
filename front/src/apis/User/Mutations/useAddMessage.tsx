// 중요❗️ Get 제외한 나머지는 요기 Mutation폴더에 작성하기 !!!

import { useMutation } from "@tanstack/react-query"; // 1. 리액트쿼리 기본 제공값 -> .mutate로 입력한 값 담는 곳 (?)
import { addMessage } from "../userAPI";
// import { useQueryClient } from "@tanstack/react-query";

// 2. mutate로 담아놓은 값을 담아서 사용할 api에 보내주고, 성공할때랑 실패할 때 메시지 확인
// 3. 이제 직접 함수를 사용할 곳으로 이동 ! -> SignUpPage로 고고슁
const useAddMessage = () => {
  // const queryCilent = useQueryClient();
  return useMutation((tel: string) => addMessage(tel), {
    onSuccess: () => {
      console.log("메세지 갔니?");
    },
    onError: () => {
      console.log("메세지 전송 실패...");
    },
  });
};

export { useAddMessage };
