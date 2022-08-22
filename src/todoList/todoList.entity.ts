import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('TodoList')
export class TodoListEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ length: 30 })
    text: string;

    constructor(id: number, text: string) {
        this.id = id;
        this.text = text;
    }

}