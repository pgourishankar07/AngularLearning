import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../model/task.model';
import { CardComponent } from "../card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone:false,
  
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    console.log("Id of the task : ",this.task.id);
    
    this.complete.emit(this.task.id);
  }
}

/**
 * DatePipe -> class to pipe date
 */
