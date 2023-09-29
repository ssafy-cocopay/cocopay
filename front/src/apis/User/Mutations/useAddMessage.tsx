import { useMutation } from "@tanstack/react-query";
import { addMessage } from "../userAPI";
// import { User } from '@/types';
// import { updateUser } from '@/apis/User/userAPI';

const useAddMessage = () => {
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
