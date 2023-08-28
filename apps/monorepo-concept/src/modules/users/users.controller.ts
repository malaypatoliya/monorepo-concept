import { Body, Controller, Get, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    // constructor(@Inject('STORE') private userService: UsersService) { }
    constructor(private userService: UsersService) { }

    @ApiTags('Users')
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Return all users.' })
    @Get()
    async getAllUsers() {
        return {
            message: await this.userService.getAllUsers()
        }
    }

    @ApiTags('Users')
    @ApiOperation({ summary: 'Create a new user' })
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ status: 201, description: 'User successfully created' })
    @UsePipes(new ValidationPipe())
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return {
            message: await this.userService.createUser(createUserDto)
        }
    }


}
