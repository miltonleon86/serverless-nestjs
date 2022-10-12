import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './modules/first/first.module';
import { SecondModule } from './modules/second/second.module';
import { ThirdModule } from './modules/third/third.module';

@Module({
  imports: [
    FirstModule,
    SecondModule,
    ThirdModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
