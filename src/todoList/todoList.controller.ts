import {Controller, Get, Post, Render, Body} from "@nestjs/common";
import {TodoListService} from "./todoList.service";
import {TodoListEntity} from "./todoList.entity";

@Controller('todoList')
export class TodoListController {
    constructor(
        private readonly todoListService: TodoListService
    ) {}

    @Render('todoList')
    @Get()
    todoList(): TodoListEntity[] {
        const todos = this.todoListService.getTodos();
        return todos;
    }

    @Post()
    insertTodoList(@Body() todotodo : TodoListEntity): string {

        this.todoListService.insertTodos(todotodo);

        return "axiosHiddd";
    }

}