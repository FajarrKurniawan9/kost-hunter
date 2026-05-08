import { Module } from '@nestjs/common';
import { KostsService } from './kosts.service';
import { KostsController } from './kosts.controller';

@Module({
  controllers: [KostsController],
  providers: [KostsService],
})
export class KostsModule {}
