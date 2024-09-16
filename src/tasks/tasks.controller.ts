import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { create } from 'domain';

@Controller('tasks')
export class TasksController {
    constructor(private readonly _tasksService: TasksService) {}

    @Get()
    public getAllTasks(): Task[] {
        return this._tasksService.getAllTasks();
    }

    @Post()
    public createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this._tasksService.createTask(createTaskDto);
    }
}
