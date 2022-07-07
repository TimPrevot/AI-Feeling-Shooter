import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tweet_predSchema } from '../../../../db/schemas/tweet_pred.schema';
import { Tweet_predService } from './tweet_pred.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tweet_pred', schema: Tweet_predSchema },
    ]),
  ],
  providers: [Tweet_predService],
})
export class Tweet_predModule {}
