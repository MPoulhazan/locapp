import { User } from "./user";

export interface CollectCenter {
    id: number
    name: string;
    description: string;
    owner: User;
    openDate: string;
    long: number;
    lat: number;
}
