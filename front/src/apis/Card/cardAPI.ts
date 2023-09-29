// apis/User/UserAPI.ts
import { instance } from "@/apis/instance";
import { CardInfo, PostCardPurchasedPayload, PayOnline } from "@/types/card";

// TODO: types에 카드 타입 지정해주고 그곳으로부터 불러오기
// import { Card, TotalAmountMonth } from '@/types/card';

// 예시일뿐... 이름과 async로 넘길 인자, api 주소 등 맞춰서 수정해주세요 
// const getCardDetails = async (cardId: number) => {
//     try {
//       const response = await instance.get(`/name/${cardId}`);
//       return response.data;
//     } catch {
//       new Error('card name put error');
//     }
//   };

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
    const response = await instance.get('/users');
    return response.data;
  } catch {
    new Error('card name put error');
  }
};

const getCardList = async () => {
  try {
    const response = await instance.get('/cards/list');
    return response.data;
  } catch {
    new Error('card name put error');
  }
};

const deleteCard = async (cardId : number) => {
    await instance.delete(`/cards/${cardId}`);
};

const getCardDetail = async (cardId : number) => {
  try {
    const response = await instance.get(`/cards/detail/${cardId}`);
    return response.data;
  } catch {
    new Error('card name put error');
  }
};

// const getCardPurchased = async (cardId : number) => {
//   try {
//     const response = await instance.get(`/cards/detail/${cardId}`);
//     return response.data;
//   } catch {
//     new Error('card name put error');
//   }
// };


const postCard = async (cardInfo: CardInfo) => {
  await instance.post('/cards', cardInfo);
};

const postCardPurchased = async (cardPurchased: PostCardPurchasedPayload) => {
  const response = await instance.post('/cards/history', cardPurchased);
  return response.data;  // 응답 데이터를 반환
};

const postPayOnline = async (payOnline: PayOnline) => {
  const response = await instance.post('/pay/online', payOnline);
  return response.data;  // 응답 데이터를 반환
};

export { getTotalAmountMonth, getCardList, deleteCard, getCardDetail, postCard, postCardPurchased, postPayOnline }