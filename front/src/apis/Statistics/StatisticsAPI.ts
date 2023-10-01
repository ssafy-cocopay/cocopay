import { instance } from "@/apis/instance";

const getAllAmounts = async (thisMonth: number) => {
  try {
    const response = await instance.get(`/cards/total`);
    return response.data;
  } catch {
    new Error("getAllAmounts error");
  }
};

export { getAllAmounts };
