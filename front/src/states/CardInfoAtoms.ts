import {atom} from "recoil"


export const CardNumberAtom = atom({
    key: 'CardNumberAtom',
    default:''
})

export const CvcAtom = atom({
    key: 'CvcAtom',
    default:''
})

export const ValidDateAtom = atom({
    key: 'ValidDateAtom',
    default:''
})

export const CardPasswordAtom = atom({
    key: 'CardPasswordAtom',
    default:''
})

export const CardIdAtom = atom({
    key: 'CardIdAtom',
    default: 0
})