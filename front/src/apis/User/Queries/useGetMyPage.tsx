import { useQuery } from "@tanstack/react-query";
import { getUserMyPage } from "../userAPI";

const useGetMyPage = () => {
  const { data: UserMyPage } = useQuery(["UserMyPage"], () => getUserMyPage());
  return UserMyPage;
};

export { useGetMyPage };
