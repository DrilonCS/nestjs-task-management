import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly _tasksService: TasksService) {}

    @Get()
    public getAllTasks(): Task[] {
        return this._tasksService.getAllTasks();
    }

    @Get('/:id')
    public getTaskById(@Param('id') id: string): Task {
        return this._tasksService.getTaskById(id);
    }

    @Post()
    public createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this._tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    public deleteTaskById(@Param('id') id: string): void {
        return this._tasksService.deleteTaskById(id);
    }
}
