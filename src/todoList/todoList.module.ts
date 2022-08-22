import {Module} from "@nestjs/common";
import {TodoListController} from "./todoList.controller";
import {TodoListService} from "./todoList.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import {TodoListEntity} from "./todoList.entity";

@Module({
    imports: [TypeOrmModule.forFeature([TodoListEntity])]
  , controllers: [TodoListController]
  , providers: [TodoListService]
})
export class TodoListModule{}