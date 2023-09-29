interface Card {
    id: number;
    serialNumber: string;
    cardOrder: number;
    cardType: string;
    cardName: string;
    visa: boolean;
    master: boolean;
    cardImage: string;
    graphRate: number;
}

interface TotalAmountMonth {
    totalPayByMonth: number;
    totalDiscountByMonth: number;
}

interface CardDetail {
    userCardId: number;
    cardName: string;
    level: number;
    nextLevel: number;
    price: number;
    percent: number;
    cardImage: string;
}

// interface PayOffline {

// }

export type { Card, TotalAmountMonth, CardDetail }