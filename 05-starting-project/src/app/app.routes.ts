import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
  },
];


/**
 * This is where all routes mapping done
 * 
 * order matters -> top to bottom if parent path is similar 
 * 
 *     path: 'users/:userId', -> dynamic routing
 */