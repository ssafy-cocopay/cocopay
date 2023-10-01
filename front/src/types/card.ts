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

interface CardInfo {
  serialNumber: string;
  cvc: string;
  validDate: string;
  password: string;
}

interface PostCardPurchasedPayload {
    cardId: number;
    month: string;
}

interface PayOnline {
  category: string;
  storeName: string;
  orderPrice: number;
}

interface MainCard {
  id: number;
  cardOrder: number;
  cocoType: boolean;
  cardImage: string;
  barcodeNum: string;
}

interface CardAmount {
    CardAmount: Data
  }
  
interface CardHistoryLists {
    transactionDate: string;
    amount: number;
    store: string;
    discountAmount: number;
    discountType: string | null;
    transactionType: string;
}
  
interface Data {
    amount: number;
    discountAmount: number;
    cardHistoryList: CardHistoryLists[];
}

export type { Card, TotalAmountMonth, CardDetail, CardInfo, PostCardPurchasedPayload, PayOnline, CardAmount, CardHistoryLists }