import {atom} from "recoil"

export const CardDetailAtom = atom({
    key: 'CardDetailAtom',
    default: {
        amount: 0,
        discountAmount: 0,
        cardHistoryList: []
    }
});

export const CardDetailIdAtom = atom({
    key: 'CardDetailIdAtom',
    default: 0
})

const date = new Date();
export const CardDetailMonthAtom = atom({
    key: 'CardDetailMonthAtom',
    default: date.getMonth() + 1
})