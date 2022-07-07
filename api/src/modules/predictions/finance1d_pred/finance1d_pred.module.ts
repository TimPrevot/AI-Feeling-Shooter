import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Finance1d_predSchema } from '../../../../db/schemas/finance1d_pred.schema';
import { Finance1d_predService } from './finance1d_pred.service';
import { Finance12_predService } from '../finance12_pred/finance12_pred.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'finance1d_pred', schema: Finance1d_predSchema },
    ]),
  ],
  providers: [Finance1d_predService],
  exports: [Finance1d_predService, MongooseModule],
})
export class Finance1d_predModule {}
