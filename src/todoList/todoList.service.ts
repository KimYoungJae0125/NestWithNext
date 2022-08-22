import {Injectable} from "@nestjs/common";
import {TodoListEntity} from "./todoList.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class TodoListService {
    constructor(
        @InjectRepository(TodoListEntity)
        private todoListRepository: Repository<TodoListEntity>
    ) {}
    private todoLists = [
        new TodoListEntity(1, 'test')
      , new TodoListEntity(2, 'test2')
      , new TodoListEntity(3, 'test3')
    ]

    getTodos(): TodoListEntity[] {
        return this.todoLists;
    }

    async insertTodos(todotodo : TodoListEntity) {
        console.log("nest.js")
        console.log(todotodo)
        await this.todoListRepository.save(todotodo);
    }

}