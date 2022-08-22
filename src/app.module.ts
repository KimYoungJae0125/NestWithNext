import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListModule } from './todoList/todoList.module';

@Module({
  imports: [
       RenderModule.forRootAsync(Next({
                                        dev: process.env.NODE_ENV !== 'production'
                                        })),
       TypeOrmModule.forRoot(),
       TodoListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
