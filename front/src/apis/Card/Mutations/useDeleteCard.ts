import { useMutation } from '@tanstack/react-query';
import { deleteCard } from '@/apis/Card/cardAPI';

const useDeleteCard = () => {
    return useMutation((cardId: number) => deleteCard(cardId), {
        onSuccess: () => {
            console.log("야 됐냐?");
        },
        onError: () => {
            console.log('삭제 실패');
        },
    });
}

export { useDeleteCard };