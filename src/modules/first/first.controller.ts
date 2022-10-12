import {Controller, Get} from '@nestjs/common';
import { FirstService} from './first.service';

@Controller('api/first')
export class FirstController {
    constructor(private readonly firstService: FirstService) {}

    @Get()
    getHello(): string {
        return this.firstService.getHello();
    }
}
