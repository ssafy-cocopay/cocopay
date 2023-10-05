// apis/User/UserAPI.ts
import { instance } from "@/apis/instance";
import { CardInfo, PostCardPurchasedPayload, PayOnline, PayOnlineComplete } from "@/types/card";

// 카드 정보를 업데이트할 일은 없으나 다른 put 요청이 있다면~
// 필요없으면 이 부분 지워주삼
// const updateCard = async (card: Card) => {
//   try {
//     await instance.put('/name', card);
//   } catch {
//     new Error('user name put error');
//   }
// };

const getTotalAmountMonth = async () => {
  try {
    const response = await instance.get("/users");
    return response.data;
  } catch {
    new Error("getTotalAmountMonth error");
  }
};

const getMainCards = async () => {
  try {
    const response = await instance.get("/cards");
    return response.data;
  } catch {
    new Error("getMainCards error");
  }
};

const getCardList = async () => {
  try {
    const response = await instance.get("/cards/list");
    return response.data;
  } catch {
    new Error("getCardList error");
  }
};

const getUserCard = async () => {
  try {
    const response = await instance.get("/users/card");
    return response.data;
  } catch (error) {
    throw new Error("getCardList error");
}
};

const deleteCard = async (cardId: number) => {
  await instance.delete(`/cards/${cardId}`);
};

const getCardDetail = async (cardId: number) => {
  try {
    const response = await instance.get(`/cards/detail/${cardId}`);
    return response.data;
  } catch {
    new Error("getCardDetail error");
  }
};

const postCard = async (cardInfo: CardInfo) => {
  const response = await instance.post("/cards", cardInfo);
  return response.data;
};

const postCardPurchased = async (cardPurchased: PostCardPurchasedPayload) => {
  const response = await instance.post("/cards/history", cardPurchased);
  return response.data; // 응답 데이터를 반환
};

const postPayOnline = async (payOnline: PayOnline) => {
  const response = await instance.post("/pay/online", payOnline);
  return response.data; // 응답 데이터를 반환
};

const postPayOnlineComplete = async (PayOnlineComplete: PayOnlineComplete) => {
  await instance.post("/pay", PayOnlineComplete);
}

export {
  getTotalAmountMonth,
  getMainCards,
  getCardList,
  deleteCard,
  getCardDetail,
  postCard,
  postCardPurchased,
  postPayOnline,
  postPayOnlineComplete,
  getUserCard
};
