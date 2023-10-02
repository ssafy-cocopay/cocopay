import { instance } from "@/apis/instance";

const getAllAmounts = async () => {
  try {
    const response = await instance.get("/cards/total");
    return response.data;
  } catch {
    new Error("getAllAmounts error");
  }
};

export { getAllAmounts };
