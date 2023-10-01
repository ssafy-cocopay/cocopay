import { useMutation } from '@tanstack/react-query';
import { postCard, postCardPurchased, postPayOnline } from '../cardAPI';
import { CardInfo, PostCardPurchasedPayload, PayOnline } from '@/types/card';

const usePostCard = () => {
    return useMutation((cardInfo: CardInfo) => postCard(cardInfo), {
        onSuccess: (data) => {
            return data
        },
        onError: () => {
            console.log('작성 실패');
        },
    });
}

const usePostCardPurchased = () => {
    return useMutation((cardPurchased: PostCardPurchasedPayload) => postCardPurchased(cardPurchased), {
        onSuccess: (data) => {
            console.log("야 usePostCardPurchased?");
            console.log(data);
            return data
        },
        onError: () => {
            console.log('작성 실패');
        },
    });
}

const usePostPayOnline = () => {
    return useMutation((payOnline: PayOnline) => postPayOnline(payOnline), {
        onSuccess: (data) => {
            return data
        },
        onError: () => {
            console.log('작성 실패');
        },
    });
}


export { usePostCard, usePostCardPurchased, usePostPayOnline };