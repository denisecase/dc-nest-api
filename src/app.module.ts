import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestModule } from './quest/quest.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [QuestModule],
})
export class AppModule {}
