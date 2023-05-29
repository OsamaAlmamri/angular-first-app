import { Component,OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TaskComponent {
tasks:Task[] = [];
constructor(private taskSerive:TaskService)
{

}
ngOnInit() : void {
 this.taskSerive.getTasks().subscribe((tasks)=>this.tasks=tasks);
}
}
