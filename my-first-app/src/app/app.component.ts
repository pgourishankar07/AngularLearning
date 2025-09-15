import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { DUMMY_USERS } from './util/dummy-users';
import { TasksComponent } from './component/tasks/tasks.component';
// import { NgFor, NgIf } from '@angular/common';  // for using ngFor and ngIf in template

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    console.log(`Selected user id  : ${id}`);
    this.selectedUserId = id;
  }
}

/**

selector ->  When Angular encounters <app-root></app-root> in your index.html (or another component's template), it knows to render this AppComponent there.

imports ->  This property is used in standalone components (which this component appears to be, as it uses imports directly in @Component instead of NgModule). It declares other standalone components, directives, or pipes that this component needs to use in its template.
if any other components needs to be used inside this current app component then u mention it - to scan component

what ever variable is written inside the class those are utillised by child componenet or templateUrl to render

when the event emit is 
 */
