// Queries는 Get요청

// import { getCardDetails } from "@/apis/Card/cardAPI";
// import { Card } from '@/types'; // 타입 api 호출 맞춰 지정해주세요
import { useQuery } from "@tanstack/react-query";

// const useGetCardDetails = (cardId: number): Card => {
//   const { data: cardDetails } = useQuery(['cardDetails', cardId], () => // 이 쿼리의 키는 ['cardDetails', cardId]로 정의
//     getCardDetails(cardId)
//   );

//   return cardDetails; // 결과데이터 반환 -> 화면에서 사용 또는 리코일에 저장하세요
// };

export {};
    