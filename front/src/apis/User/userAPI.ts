import { instance } from "@/apis/instance";

const addMessage = async (tel: string) => {
  await instance.post("/users/message-auth", { tel });
};

export { addMessage };
