import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Finance12_predSchema } from '../../../../db/schemas/finance12_pred.schema';
import { Finance12_predService } from './finance12_pred.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'finance1_2_pred', schema: Finance12_predSchema },
    ]),
  ],
  providers: [Finance12_predService],
  exports: [Finance12_predService, MongooseModule],
})
export class Finance12_predModule {}
