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

interface CardUpload {
  serialNumber: string;
  cardType: string;
  cardName: string;
  visa: boolean;
  master: boolean;
  cardDefaultImage: string;
  graphRate: number;
  validDate: string;
  userCardId: number;
}

interface TotalAmountMonth {
  totalPayByMonth: number;
  totalDiscountByMonth: number;
}

interface OfflinePay {
  cardImage: string;
  cardName: string;
  discounted: number;
  remainingAmt: number;
  graphRate: string;
  nextPerLevel: number;
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
  CardAmount: Data;
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

interface PayOnlineComplete {
    cardId : number;
    orderPrice : number;
    transactionType : string;
}

export type {
  Card,
  TotalAmountMonth,
  CardDetail,
  CardInfo,
  PostCardPurchasedPayload,
  PayOnline,
  CardAmount,
  CardHistoryLists,
  MainCard,
  PayOnlineComplete,
  OfflinePay,
  CardUpload
};
