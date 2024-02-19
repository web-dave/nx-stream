import { Injectable } from '@nestjs/common';
import { IUser } from '@juri/models';

@Injectable()
export class AppService {
  getData(): IUser {
    return { name: 'Juri', age: 38 };
  }
}
