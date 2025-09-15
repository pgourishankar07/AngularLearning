import { NgModule } from '@angular/core';
import { NewTaskComponent } from '../component/new-task/new-task.component';
import { TaskComponent } from '../component/task/task.component';
import { TasksComponent } from '../component/tasks/tasks.component';
import { CardModule } from './card.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],  // this is for combining all these components to form a module
  exports: [TasksComponent],  // from our declarations component which component is used by other modules (so export)
  imports: [CommonModule, FormsModule, CardModule], // from our declarations component depends upon all these components to work (becoz they require - so import it)
})
export class TaskModule {}

/**
 * Purpose: This is a feature module that groups all components related to tasks (listing, individual task, creating new tasks).

declarations:
[TasksComponent, TaskComponent, NewTaskComponent]: All these components are declared within TaskModule. Their templates can use each other.

exports:
[TasksComponent]: This means only TasksComponent is made available for other modules (like AppModule) to import and use. The other components (TaskComponent, NewTaskComponent) are internal to TaskModule and can only be used by TasksComponent or other declared components within TaskModule.

imports:
CommonModule: Crucial for all feature modules that are not the root AppModule. It provides common Angular directives like *ngIf, *ngFor, and pipes like DatePipe (which is also explicitly imported for typing, though CommonModule itself makes it available).
FormsModule: This module is imported because NewTaskComponent or other components within TaskModule likely use features like [(ngModel)] for form handling.
CardModule: This indicates that components declared in TaskModule (e.g., TasksComponent or TaskComponent) need to use the CardComponent in their templates. Since CardModule exports CardComponent, TaskModule can import CardModule to gain access to it.
 */