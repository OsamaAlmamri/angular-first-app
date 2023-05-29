import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/task';
import { Observable ,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks():Observable<Task[]>
  {
    const tasks=of(TASKS);
    return tasks;
  }
}
