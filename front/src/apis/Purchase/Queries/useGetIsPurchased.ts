// Queries는 Get요청

import { getIsPurchased } from '../purchaseAPI';
import { useQuery } from '@tanstack/react-query';


const useGetIsPurchased = () => {
    const { data: IsPurchased } = useQuery(['IsPurchased'], getIsPurchased, {
      refetchInterval: 3000,  // 3초마다 리페치
    });
    return IsPurchased;
  }
  
  export { useGetIsPurchased };