import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Finance12_predSchema } from '../../../../db/schemas/finance12_pred.schema';
import { Finance12_predService } from './finance12_pred.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Finance1/2_pred', schema: Finance12_predSchema },
    ]),
  ],
  controllers: [],
  providers: [Finance12_predService],
  exports: [Finance12_predService],
})
export class Finance12_predModule {}
