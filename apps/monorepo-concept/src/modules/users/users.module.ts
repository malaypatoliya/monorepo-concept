import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  // providers: [{provide: "STORE", useClass: UsersService}]
  providers: [UsersService] // short syntax for the above
})
export class UsersModule { }


// import: for importing other modules (services, repositories, factories, helpers, etc)
// controllers: for handling incoming requests and returning responses to the client
// providers: ready to be injected in other modules (services, repositories, factories, helpers, etc)