import { Test, TestingModule } from '@nestjs/testing';
import { KostsController } from './kosts.controller';
import { KostsService } from './kosts.service';

describe('KostsController', () => {
  let controller: KostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KostsController],
      providers: [KostsService],
    }).compile();

    controller = module.get<KostsController>(KostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
