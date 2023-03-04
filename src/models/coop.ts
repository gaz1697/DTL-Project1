import client from "../database";\

export type Coop = {
    id?: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    description: string;
    image: string;
};

export class CoopStore {
}
