import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello world - from Dr. Case!';
  }
  getWelcome(): string {
    return 'Welcome to the world, babies!';
  }
}
