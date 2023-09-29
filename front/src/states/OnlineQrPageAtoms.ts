import {atom} from "recoil"


export const IsPurchasedAtom = atom({
    key: 'IsPurchasedAtom',
    default:false
})

export const PayOnlineCardList = atom({
    key: 'PayOnlineCardList',
    default:[]
})