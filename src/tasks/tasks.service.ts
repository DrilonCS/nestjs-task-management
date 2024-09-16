import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private _tasks = [];

    public getAllTasks() {
        return this._tasks;
    }
}
