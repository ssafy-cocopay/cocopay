import { useQuery } from "@tanstack/react-query";
import { getOfflinePay } from "../userAPI";

const useGetOfflinePay = () => {
  const { data: OfflinePay } = useQuery(["OfflinePay"], () => getOfflinePay());
  return OfflinePay;
};

export { useGetOfflinePay };
