import {Controller, Get} from '@nestjs/common';
import { SecondService} from './second.service';

@Controller('/api/second')
export class SecondController {
    constructor(private readonly secondService: SecondService) {}

    @Get()
    getHello(): string {
        return this.secondService.getHello();
    }
}
