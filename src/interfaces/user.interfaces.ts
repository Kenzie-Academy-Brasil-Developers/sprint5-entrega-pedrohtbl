export interface ICreateUser{
    name: string;
    email: string;
    password: string;
    age: number;
}

export interface IUser extends ICreateUser{
    id: string;
    created_at: Date;
    updated_at: Date;
}

export interface IUpdateUser{
    name?: string;
    email?: string;
    password?: string;
    age?: number;
    id?: string;
}