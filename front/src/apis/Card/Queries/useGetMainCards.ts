import { useQuery } from "@tanstack/react-query";
import { getMainCards } from "@/apis/Card/cardAPI";

const useGetMainCards = () => {
  const { data: MainCards } = useQuery(["MainCards"], () => getMainCards());
  return MainCards;
};

export { useGetMainCards };
