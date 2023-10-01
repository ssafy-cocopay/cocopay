import { useQuery } from "@tanstack/react-query";
import { getCardDetail } from "../cardAPI";

const useGetCardDetail = (cardId: number) => {
  const { data: CardDetail } = useQuery(["CardDetail", cardId], () =>
    getCardDetail(cardId)
  );
  return CardDetail;
};

export { useGetCardDetail };
