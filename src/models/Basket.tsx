import { User } from "firebase";
import { CollectCenter } from "./CollectCenter";

export interface Basket {
    id: number
    title: string;
    decription: string;
    seller: User,
    price: number,
    priceBeforeReduction?: number,
    creationDate: number,
    collectStartDate: number,
    collectEndDate: number,
    collectCenter: CollectCenter,
    isOrganic: boolean,
    isVeggie: boolean,
    status: BasketStatus,
    content: OrderContent[]
}

export enum OrderContent {
    vegetable,
    fruit,
    meat,
    fish,
    fromage,
    honey,
    other,
}

export enum BasketStatus {
    available,
    finish
}
