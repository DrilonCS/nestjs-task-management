import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
    constructor(private readonly _tasksService: TasksService) {}

    @Get()
    public getAllTasks(): Task[] {
        return this._tasksService.getAllTasks();
    }

    @Post()
    public createTask(
        @Body('title') title: string,
        @Body('description') description: string
    ): Task {
        return this._tasksService.createTask(title, description);
    }
}
