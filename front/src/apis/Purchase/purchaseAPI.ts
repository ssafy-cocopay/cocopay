// apis/User/UserAPI.ts
import { instance } from "@/apis/instance";


const getIsPurchased = async () => {
  try {
    const response = await instance.get("/pay/check");
    return response.data;
  } catch {
    new Error("getTotalAmountMonth error");
  }
};

export {
    getIsPurchased
};
