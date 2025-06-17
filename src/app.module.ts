import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyService } from './company/company.service';
import { CompanyModule } from './company/company.module';
import { Company } from './company/model/company.model';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ".env",
    isGlobal: true
  }),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
    autoLoadModels: true,
    synchronize: true,
    logging: false,
    models: [Company]
  }),
  CompanyModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
