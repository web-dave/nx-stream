import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { name: string } {
    return { name: 'Juri' };
  }
}
