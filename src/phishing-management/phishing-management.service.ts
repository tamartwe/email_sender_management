import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PhishingEmail } from './phishing.schema';
import axios from 'axios';
import { EmailDto } from './phishing.dto';


@Injectable()
export class PhishingManagementService {
    constructor(
        @InjectModel(PhishingEmail.name) private phishingModel: Model<PhishingEmail>
      ) {}
    
      async getAllRecords(): Promise<any> {
        try {
          const records = await this.phishingModel.find();
          return records;
        } catch (ex) {
          console.error(ex);
          return { error: ex.message };
        }
      }

      async sendEmail(dto : EmailDto): Promise<any> {
        const postData = {
          email: dto.email
        };
    
        try {
          const response = await axios.post('http://localhost:3000/phishing/send', postData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          return response.data;
        } catch (error) {
          console.error('Error sending POST request:', error.message);
          return { error: error.message };
        }
      }
}
