import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Task } from './task.entity'; 
import { CreateTaskDto } from './create-task.dto';

@Injectable() export class TaskService {

    constructor(@InjectRepository(Task) private readonly TaskRepository: Repository<Task>){}

    findAll() {
        return this.TaskRepository.find();
    }

    findOne(id: number)  {
        return this.TaskRepository.findOneByOrFail({id});
    }

    create(data: CreateTaskDto) {
        const task = new Task();
        task.task = data.task;
        task.progress = data.progress;

        return this.TaskRepository.save(task);
    }

    update(data: CreateTaskDto, id: number) {
        return this.TaskRepository.save({...data, id: Number(id)})
    }

    
    delete(id: number) {
        return this.TaskRepository.delete(id)
    }

};
