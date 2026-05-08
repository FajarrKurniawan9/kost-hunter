import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KostsResolver } from './kosts/kosts.resolver';
import { KostsModule } from './kosts/kosts.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, KostsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, KostsResolver],
})
export class AppModule {}
