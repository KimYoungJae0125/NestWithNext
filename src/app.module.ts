import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
       RenderModule.forRootAsync(Next({
                                        dev: process.env.NODE_ENV !== 'production'
                                        })),
       TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
