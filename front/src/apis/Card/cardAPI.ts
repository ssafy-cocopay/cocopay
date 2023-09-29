// apis/User/UserAPI.ts
import { instance } from "@/apis/instance";
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

export { getTotalAmountMonth, getCardList, deleteCard, getCardDetail }