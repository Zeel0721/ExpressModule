import { Collection, ObjectId } from "mongodb";

export interface CollectionInterface {
    userCollection: Collection<User>;
    companyCollection: Collection<Company>;
    productCollection: Collection<Product>;
    orderCollection: Collection<Order>;
}

export interface User {
    _id: ObjectId;
    username: string;
    email: string;
    password: string;
    verified: boolean;
    hashedRt?: string;
}

export interface Company {
    company: string;
    products: Product[];
    createdBy?: User;
}

export interface Product {
    productsname: string;
    description: string;
    quantity: number;
    createdBy?: User;
}

export interface Order {
    companyname: string;
    orderdetail: OrderDetail[];
    date: Date;
    invoice?: Blob;
    createdBy?: User;
}

export type OrderDetail = {
    productname: string;
    quantity: number;
};
