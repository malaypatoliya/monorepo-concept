import { Injectable } from '@nestjs/common';
import db from '../../database/models';
import { CreateUserDto } from './dto/create-user.dto';
const { User } = db;

@Injectable() // ready to be injected in other modules
export class UsersService {

    async getAllUsers() {
        return await User.findAll();
    }

    async createUser(body: CreateUserDto) {
        return await User.create(body);
    }

}