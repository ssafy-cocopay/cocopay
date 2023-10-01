import {atom} from "recoil"

export const CardDetailAtom = atom({
    key: 'CardDetailAtom',
    default: {
        amount: 0,
        discountAmount: 0,
        cardHistoryList: []
    }
});
