import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Finance2m_predSchema } from '../../../../db/schemas/Finance2m_pred.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Finance2m_pred', schema: Finance2m_predSchema },
    ]),
  ],
  providers: [],
})
export class Finance2m_predModule {}
