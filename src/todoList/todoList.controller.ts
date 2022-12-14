import {Controller, Get, Post, Delete, Render, Body, Param} from "@nestjs/common";
import {TodoListService} from "./todoList.service";
import {TodoListEntity} from "./todoList.entity";

@Controller('todoList')
export class TodoListController {
    constructor(
        private readonly todoListService: TodoListService
    ) {}

    @Render('todoList')
    @Get()
    todoList(): Promise<TodoListEntity[]> {
        console.log("nest.test");
        console.log(this.todoListService.findAll());
        console.log("nest.test");
        return this.todoListService.findAll();
    }

    @Post()
    insertTodoList(@Body() todoListData : TodoListEntity): Promise<TodoListEntity> {

        return this.todoListService.insertTodos(todoListData);
    }

    @Delete(':id')
    deleteTodoList(@Param("id") id: number) {
        console.log("id :", id)
        this.todoListService.deleteTodos(id);
        return {id};
    }

}