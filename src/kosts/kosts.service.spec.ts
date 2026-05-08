import { Test, TestingModule } from '@nestjs/testing';
import { KostsService } from './kosts.service';

describe('KostsService', () => {
  let service: KostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KostsService],
    }).compile();

    service = module.get<KostsService>(KostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
