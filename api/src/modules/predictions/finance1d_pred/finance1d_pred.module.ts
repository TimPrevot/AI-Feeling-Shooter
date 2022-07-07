import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Finance1d_predSchema } from '../../../../db/schemas/finance1d_pred.schema';
import { Finance1d_predService } from './finance1d_pred.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Finance1d_pred', schema: Finance1d_predSchema },
    ]),
  ],
  providers: [Finance1d_predService],
})
export class Finance1d_predModule {}
