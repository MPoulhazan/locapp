import { CollectCenter } from "./CollectCenter";
import { User } from "./user";

export interface Basket {
    id: number
    title: string;
    decription: string;
    image?: string,
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
