import { Module } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportModule } from './modules/report/report.module';

@Module({
  imports: [SwaggerModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
