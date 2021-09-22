import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://fraser:4qx3xoO6Dko3NFNs@cluster0.yvygw.mongodb.net/db_nestComHeroku?retryWrites=true&w=majority'), UsersModule],   //importar mongoose module
  controllers: [],
  providers: [],
})
export class AppModule {}
