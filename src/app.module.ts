import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    "name": "default",
    "type": "mssql",
    "host": "192.168.99.100",
    "port": 1433,
    "username": "ddamko",
    "password": "Br33d$55",
    "database": "TheRing",
    "synchronize": false,
    "logging": true,
    "entities": [
      __dirname + "/entities/*.ts"
    ],
    "migrations": [
      __dirname + "/migration/*.ts"
    ],
    "subscribers": [
      __dirname + "/subscriber/*.ts"
    ]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
