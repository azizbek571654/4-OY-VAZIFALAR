import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function start() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
    console.log(process.env.PORT);
    
  } catch (error) {
    console.log(error);
    
  }
}
start();
