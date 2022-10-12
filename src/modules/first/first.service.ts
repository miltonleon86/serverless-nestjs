import { Injectable } from '@nestjs/common';

@Injectable()
export class FirstService {
    getHello(): string {
        return 'Hello First Service!';
    }
}
