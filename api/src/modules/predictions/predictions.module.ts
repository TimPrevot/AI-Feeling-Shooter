import { Module } from '@nestjs/common';
import { Finance12_predModule } from './finance12_pred/finance12_pred.module';
import { Finance1d_predModule } from './finance1d_pred/finance1d_pred.module';
import { Finance2m_predModule } from './finance2m_pred/finance2m_pred.module';
import { Tweet_predModule } from './tweet_pred/tweet_pred.module';

@Module({
  imports: [
    Finance12_predModule,
    Finance1d_predModule,
    Finance2m_predModule,
    Tweet_predModule,
  ],
})
export class PredictionsModule {}
