import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    img: string;
    pdf: string;
    createdAt: Date;
    updatedAt: Date;
}
