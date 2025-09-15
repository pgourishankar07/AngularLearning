import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { addTask } from '../../model/addTask.model';

@Component({
  selector: 'app-new-task',
  standalone:false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {


  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<addTask>();


  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    })
  }

}

/**
 * FormsModule -> collection of directives which help us deal with forms like ngModel,etc - also removes the default behaviour of submission of forms - 
 * 
 * using signals ->   enteredDate = ''; ->   enteredDate = signal('');
 */
