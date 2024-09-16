import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
    private _tasks: Task[] = [];

    public getAllTasks(): Task[] {
        return this._tasks;
    }

    public createTask(title: string, description: string): Task {
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN
        }
        
        this._tasks.push(task);
        return task;
    }
}
