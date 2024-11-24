import { Test, TestingModule } from '@nestjs/testing';
import { PhishingManagementService } from './phishing-management.service';

describe('PhishingManagementService', () => {
  let service: PhishingManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhishingManagementService],
    }).compile();

    service = module.get<PhishingManagementService>(PhishingManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
