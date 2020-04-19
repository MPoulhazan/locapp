import { User } from "firebase";
import { CollectCenter } from "./CollectCenter";
import { Basket } from "./Basket";

export interface Order {
    id: number
    title: string;
    decription: string;
    customer: User,
    basket: Basket[],
    orderDate: number,
    paimentType: PaymentType,
    messageToSeller: string,
    messageToCustomet: string,
    isFinish: boolean,
    isCanceledByUser: boolean,
    isCanceledByOwner: boolean,
}

export enum PaymentType {
    CreditCard,
    Money,
    Check,
    Other
}
