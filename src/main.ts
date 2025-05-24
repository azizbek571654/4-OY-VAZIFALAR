import { NestFactory } from '@nestjs/core'; 
import { AppModule } from './app.module'; 

async function start() { 
    const PORT: number = Number(process.env.PORT);
    const app = await NestFactory.create(AppModule); 
    await app.listen (PORT, () => console.log(`server running on port ${PORT}`)); 
}

start();