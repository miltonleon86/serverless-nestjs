import { Injectable } from '@nestjs/common';

@Injectable()
export class ThirdService {
    getHello(): string {
        return 'Hello Second Service!';
    }
}
