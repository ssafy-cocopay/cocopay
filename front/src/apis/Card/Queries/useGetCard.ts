// Queries는 Get요청

import { getTotalAmountMonth, getCardList, getUserCard } from '@/apis/Card/cardAPI';
// import { Card, TotalAmountMonth } from '@/types/card'; // 타입 api 호출 맞춰 지정해주세요
import { useQuery } from '@tanstack/react-query';

// const useGetCardDetails = (cardId: number) => {
//   const { data: cardDetails } = useQuery(['cardDetails', cardId], () => // useQuery 안의 의존성배열
//     getCardDetails(cardId) // 여기에 넣으면 쿼리로 cardId 전송
//   );

//   return cardDetails;
// };

const useGetTotalAmountMonth = () => {
  const { data: TotalAmountMonths } = useQuery(['TotalAmountMonth'], () =>
    getTotalAmountMonth()
  )
  return TotalAmountMonths;
}


const useGetCardList = () => {
    const { data: CardList } = useQuery(['CardList'], () =>
    getCardList()
    )
    return CardList;
  }

  const useGetUserCard = () => {
    const { data: UserCard } = useQuery(['UserCard'], () =>
    getUserCard()
    )
    return UserCard;
  }
  
  export { useGetTotalAmountMonth, useGetCardList, useGetUserCard };