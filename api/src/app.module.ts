import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://82.123.101.212:12/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
