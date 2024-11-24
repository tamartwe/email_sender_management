import { Test, TestingModule } from '@nestjs/testing';
import { PhishingManagementController } from './phishing-management.controller';

describe('PhishingManagementController', () => {
  let controller: PhishingManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhishingManagementController],
    }).compile();

    controller = module.get<PhishingManagementController>(PhishingManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
