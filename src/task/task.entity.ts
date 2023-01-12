import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task: string;

    @Column({default : 0})
    progress: number;

};