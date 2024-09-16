import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
    constructor(private readonly _tasksService: TasksService) {}

    @Get()
    public getAllTasks(): Task[] {
        return this._tasksService.getAllTasks();
    }
}
