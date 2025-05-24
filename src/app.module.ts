import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize'; 
import { UsersModule } from './users/users.module';
import { Users } from "./users/model/user.model";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env'
        }),
        SequelizeModule.forRoot({ 
            dialect: 'postgres', 
            host: process.env.PG_HOST, 
            port: Number(process.env.PG_PORT), 
            username: process.env.PG_USER, 
            password: String(process.env.PG_PASS), 
            database: process.env.PG_DB, 
            autoLoadModels: true,
            models:[Users] 
        }),
        UsersModule,
        
    ],
})
export class AppModule {}