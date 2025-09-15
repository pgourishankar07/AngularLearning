import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../../util/dummy-tasks';
import { NewTaskComponent } from '../new-task/new-task.component';
import { addTask } from '../../model/addTask.model';
import { TasksService } from '../../service/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone:false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  // constructor(private tasksService: TasksService) {} // dependency injection or else for every compoenent render handles different data (data inconsistency)

  private tasksService = inject(TasksService); // u can also use this to inject dependency into this class

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    console.log('reachedtask id :', id);
    this.tasksService.removeUserTask(id);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddedTask(taskData: addTask) {
    this.tasksService.addUserTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
