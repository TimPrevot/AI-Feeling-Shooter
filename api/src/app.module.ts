import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PredictionsModule } from './modules/predictions/predictions.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://86.247.71.158:12/m1project'),
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    PredictionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
