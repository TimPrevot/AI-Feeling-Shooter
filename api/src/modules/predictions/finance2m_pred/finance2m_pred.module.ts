import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Finance2m_predSchema } from '../../../../db/schemas/Finance2m_pred.schema';
import { Finance2m_predService } from './finance2m_pred.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'finance2m_pred', schema: Finance2m_predSchema },
    ]),
  ],
  providers: [Finance2m_predService],
  exports: [Finance2m_predService, MongooseModule],
})
export class Finance2m_predModule {}
