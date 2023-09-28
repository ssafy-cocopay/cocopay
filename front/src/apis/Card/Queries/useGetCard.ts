// Queries는 Get요청

import { getCardDetails } from '@/apis/Card/cardAPI';
import { Card } from '@/types'; // 타입 api 호출 맞춰 지정해주세요
import { useQuery } from '@tanstack/react-query';

const useGetCardDetails = (cardId: number): Card => {
  const { data: cardDetails } = useQuery(['cardDetails', cardId], () => // useQuery 안의 의존성배열
    getCardDetails(cardId) // 여기에 넣으면 쿼리로 cardId 전송
  );

  return cardDetails;
};

export { useGetCardDetails };