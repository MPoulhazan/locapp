import { User } from "./user";

export interface CollectCenter {
    id: number
    name: string;
    description: string;
    owner: User;
    openDate: number;
    long: number;
    lat: number;
}
