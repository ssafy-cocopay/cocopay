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

interface CardPurchased {
  cardHistoryId: number;
  cardUuid: number;
  transactionDate: string;
  amount: number;
  store: string;
  accountBalance: number;
  discountAmount: number;
  discountType: string;
  transactionType: string;
  category: string;
}

interface PostCardPurchasedPayload {
  cardUuid: number;
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

export type {
  Card,
  TotalAmountMonth,
  CardDetail,
  CardInfo,
  CardPurchased,
  PostCardPurchasedPayload,
  PayOnline,
  MainCard,
};
