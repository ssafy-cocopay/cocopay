import { instance } from "@/apis/instance";

const getStaisticDiscount = async (month: number) => {
  const response = await instance.get(`/cards/total/discount/${month}`);
  // console.log("통계페이지왔니?", response.data);
  return response.data;
};
const getStaisticConsume = async (month: number) => {
  const response = await instance.get(`/cards/total/price/${month}`);
  console.log("내 소비 왔니?", response.data);
  return response.data;
};

export { getStaisticDiscount, getStaisticConsume };
