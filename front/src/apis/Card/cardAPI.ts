// apis/User/UserAPI.ts
import { instance } from "@/apis/instance";

const getTotalAmountMonth = async () => {
  try {
    const response = await instance.get("/users");
    return response.data;
  } catch {
    new Error("card name put error");
  }
};

const getCardList = async () => {
  try {
    const response = await instance.get("/cards/list");
    return response.data;
  } catch {
    new Error("card name put error");
  }
};

const deleteCard = async (cardId: number) => {
  await instance.delete(`/cards/${cardId}`);
};

export { getTotalAmountMonth, getCardList, deleteCard };
