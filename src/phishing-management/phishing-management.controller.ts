import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { PhishingManagementService } from './phishing-management.service';
import { AuthGuard } from 'src/auth/auth.gaurd';

import { EmailDto } from './phishing.dto';

@Controller('phishing-management')
export class PhishingManagementController {

  constructor(private readonly phishingManagementService: PhishingManagementService) {}

  @Get()
  async getAll(): Promise<any> {
    return this.phishingManagementService.getAllRecords();
  }

  @Post('send')
  async sendEmail(@Body() emailDto: EmailDto): Promise<any> {
    return this.phishingManagementService.sendEmail(emailDto);
  }

}
