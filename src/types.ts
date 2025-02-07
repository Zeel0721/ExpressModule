export interface IUser {
    username: string;
    email: string;
    password: string;
    verified: boolean;
    hashedRt?: string;
}

export interface ICompany {
    company: string;
    products: IProduct[];
    createdBy?: IUser;
}

export interface IProduct {
    productsname: string;
    description: string;
    quantity: number;
    createdBy?: IUser;
}

export interface IOrder {
    companyname: string;
    orderdetail: IOrderDetail[];
    date: Date;
    invoice?: Blob;
    createdBy?: IUser;
}

export type IOrderDetail = {
    productname: string;
    quantity: number;
};
