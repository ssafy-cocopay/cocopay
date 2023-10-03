import { getStaisticConsume } from "../StatisticsAPI";
import { useQuery } from "@tanstack/react-query";

const useGetStatisticConsume = (month: number) => {
  const { data: StatisticDiscount } = useQuery(
    ["StatisticConsume", month], //여기 month를 보내줘야 함! -> body가 바뀔 때 마다 그 값으로 get요청
    () => getStaisticConsume(month)
  );
  return StatisticDiscount;
};

export { useGetStatisticConsume };
