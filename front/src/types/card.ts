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

export type { Card, TotalAmountMonth }