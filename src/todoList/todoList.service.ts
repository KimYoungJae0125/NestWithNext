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

    findAll = () : Promise<TodoListEntity[]> => {
        return this.todoListRepository.find();
    }

    findOne = ({id}) : Promise<TodoListEntity> => {
        return this.todoListRepository.findOne({ id });
    }

    insertTodos = async (todoListData : TodoListEntity) => {
        return this.findOne(await this.todoListRepository.save(todoListData));
    }

}