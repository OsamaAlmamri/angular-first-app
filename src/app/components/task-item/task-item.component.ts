import { Component ,Input} from '@angular/core';
import { Task } from 'src/app/task';
import { faEdit,faTrash,faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
@Input() task? :Task ;
faEdit = faEdit;
faTrash=faTrash;
faTimes=faTimes;

}
