import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';

@Module({
    imports: [],
    controllers: [FirstController],
    providers: [FirstService],
})
export class FirstModule {}
