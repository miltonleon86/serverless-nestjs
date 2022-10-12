import {Controller, Get} from '@nestjs/common';
import { ThirdService} from './third.service';

@Controller('/api/third')
export class ThirdController {
    constructor(private readonly secondService: ThirdService) {}

    @Get()
    getHello(): string {
        return this.secondService.getHello();
    }
}
