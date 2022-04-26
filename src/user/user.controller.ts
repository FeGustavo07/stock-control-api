import { UserDTO } from './user.dto';
import { UserService } from 'src/user/user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('/user')
export class UserController {

    constructor(private service: UserService) {}

    @Post()
    public create(@Body() user: UserDTO) {
        return this.service.create(user)
    }

    @Get()
    public getAll() {
        return this.service.getAll()
    }

    @Get(':id')
    public getById(@Param('id') id: number) {
        return this.service.getById(id)
    }

    @Put(':id')
    public update(@Param('id') id: number, @Body() user: UserDTO) {
        return this.service.update(id, user)
    }

    @Delete(':id')
    public delete(@Param('id') id: number) {
        return this.service.delete(id)
    }
}