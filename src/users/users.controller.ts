import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersDto } from './interfaces/users.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
        return 'we get all users';
    }

    @Post()
    create(@Body() usersDto: UsersDto) {
        return usersDto;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `we get the user with the id ${id}`;
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return `we update the user with the id ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `we delete the user with the id ${id}`;
    }

}
