import { Entity, Column, PrimaryColumn, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Exclude } from "class-transformer";

@Entity('users')
@Unique(["email"])

export class User{
    @PrimaryColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    age: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}