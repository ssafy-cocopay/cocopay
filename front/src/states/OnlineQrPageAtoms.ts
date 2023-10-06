import {atom} from "recoil"

export const PayOnlineCardList = atom({
    key: 'PayOnlineCardList',
    default:[]
})

export const ChangeCardAtom = atom({
    key: 'ChangeCardAtom',
    default: {
        cardId: 0,
        cardImage: '',
        cardName: '',
        cardOrder: 0,
        cardType: '',
        curPerLevel: 0,
        discountRate: 0,
        discountType: '',
        discounted: 0,
        finalPrice: 0,
        graphRate: 0,
        master: false,
        pastPerfornamce: false,
        remainingAmt: 0,
        serialNumber: '',
        visa: false,
    }
})

export const OnlinePayDataAtom = atom({
    key: 'OnlinePayDataAtom',
    default: {
        "category":"", //카테고리
        "storeName":"", //GS25
        "orderPrice":0 //주문 총금액
    }
})

export const IsOnlinePurchasedAtom = atom({
    key: 'IsOnlinePurchasedAtom',
    default:'없음'
})