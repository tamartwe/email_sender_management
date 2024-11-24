import { Module } from '@nestjs/common';
import { PhishingManagementController } from './phishing-management.controller';
import { PhishingManagementService } from './phishing-management.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PhishingEmail, PhishingSchema } from './phishing.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: PhishingEmail.name, schema: PhishingSchema }])],
  controllers: [PhishingManagementController],
  providers: [PhishingManagementService]
})
export class PhishingManagementModule {}
