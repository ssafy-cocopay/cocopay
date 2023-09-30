import { useMutation } from "@tanstack/react-query";
import { addMessage } from "../userAPI";
// import { useQueryClient } from "@tanstack/react-query";

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
