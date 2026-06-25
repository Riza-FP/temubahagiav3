import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { TestimonyModule } from './testimony/testimony.module';

@Module({
  imports: [
    ArticlesModule,
    TestimonyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
