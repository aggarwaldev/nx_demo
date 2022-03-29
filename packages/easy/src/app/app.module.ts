import { Module } from '@nestjs/common';

import { Auth2Module } from '@easy/auh2/lib/auth2.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [Auth2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
