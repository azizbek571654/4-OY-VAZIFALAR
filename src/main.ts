import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config(); // .env faylni yuklaydi

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 4000;
  await app.listen(port);
  Logger.log(`🚀 Server is running at: http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
