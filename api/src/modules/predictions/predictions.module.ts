import { Module } from '@nestjs/common';
import { Finance12_predModule } from './finance12_pred/finance12_pred.module';
import { Finance1d_predModule } from './finance1d_pred/finance1d_pred.module';
import { Finance2m_predModule } from './finance2m_pred/finance2m_pred.module';
import { Tweet_predModule } from './tweet_pred/tweet_pred.module';
import { PredictionsController } from './predictions.controller';
import { Finance12_predService } from './finance12_pred/finance12_pred.service';
import { Finance1d_predService } from './finance1d_pred/finance1d_pred.service';
import { Finance2m_predService } from './finance2m_pred/finance2m_pred.service';
import { Tweet_predService } from './tweet_pred/tweet_pred.service';

@Module({
  imports: [
    Finance12_predModule,
    Finance1d_predModule,
    Finance2m_predModule,
    Tweet_predModule,
  ],
  controllers: [PredictionsController],
  providers: [
    Finance12_predService,
    Finance1d_predService,
    Finance2m_predService,
    Tweet_predService,
  ],
})
export class PredictionsModule {}
