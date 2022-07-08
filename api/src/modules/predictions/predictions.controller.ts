import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { Finance1d_predService } from './finance1d_pred/finance1d_pred.service';
import { Finance2m_predService } from './finance2m_pred/finance2m_pred.service';
import { Finance12_predService } from './finance12_pred/finance12_pred.service';
import { Tweet_predService } from './tweet_pred/tweet_pred.service';

@Controller('predictions')
export class PredictionsController {
  constructor(
    private finance1d_predService: Finance1d_predService,
    private finance2m_predService: Finance2m_predService,
    private finance12_predService: Finance12_predService,
    private tweet_predService: Tweet_predService,
  ) {}

  @Get('tweets/repartition')
  async getRepartition() {
    return await this.tweet_predService.getRepartition();
  }
}
