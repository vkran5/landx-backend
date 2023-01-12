import { Body, Controller, Get, Param, Post, UseFilters, Patch, Delete } from '@nestjs/common';
import { EntityNotFoundTask } from './entitiy-not-found-task';
import { TaskService } from './task.service';
import { CreateTaskDto } from './create-task.dto';

@Controller('task')
@UseFilters(new EntityNotFoundTask)
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Get()
    async findAll() {
        return await this.taskService.findAll()
    }

    @Post() 
    async create(@Body() data: CreateTaskDto) {
        return {
            data : await this.taskService.create(data),
            success : true
        }
    }

    @Patch(':id')
    async update(@Body() data: CreateTaskDto, @Param('id') id: number) {
        return {
            data: await this.taskService.update(data, id),
            success : true
        }
    }

    @Delete(':id') 
    async remove(@Param('id') id: number) {
        return {
            data : await this.taskService.delete(id),
            success : true
        }
        
    }
};