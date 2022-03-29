import { Module } from '@nestjs/common';
import { Auth2Module } from '@easy/auth2'

@Module({
  imports: [Auth2Module],
  controllers: [],
  providers: [],
  exports: [],
})
export class AuthModule {}
