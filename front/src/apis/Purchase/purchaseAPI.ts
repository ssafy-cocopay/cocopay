// apis/User/UserAPI.ts
import { instance } from "@/apis/instance";

const getIsPurchased = async () => {
  try {
    const response = await instance.get("/pay/check");
    return response.data;
  } catch {
    new Error("getIsPurchased error");
  }
};

const getIsOnlinePurchased = async () => {
  try {
    const response = await instance.get("/pay/online-check");
    return response.data;
  } catch {
    new Error("getIsOnlinePurchased error");
  }
};

export { getIsPurchased, getIsOnlinePurchased };
