import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { CardModule } from './module/card.module';
import { TaskModule } from './module/task.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],  // from above declarations which compo. is used for starting the App
  imports: [BrowserModule, CardModule, TaskModule],
})
export class AppModule {}


/**
 * Purpose: This is your application's root module. It's the starting point for your Angular application.

declarations:
AppComponent: This is your main application component, declared here because it's the top-level component.
HeaderComponent, UserComponent: These components are also directly declared in AppModule. This implies that their templates will only be able to use other declarations from AppModule or exported declarations from modules imported into AppModule.

bootstrap:
[AppComponent]: This tells Angular to load AppComponent when the application starts up and inject its template into the index.html file (usually where you see <app-root></app-root>).

imports:
BrowserModule: Essential for any browser-based Angular application. It provides common directives like ngIf and ngFor, and services necessary for rendering in a browser environment. You only import BrowserModule in the root AppModule. All other feature modules should import CommonModule instead (as seen in TaskModule).
CardModule: AppModule needs to use components or directives exported by CardModule (specifically, CardComponent which is exported by CardModule).
TaskModule: AppModule needs to use components or directives exported by TaskModule (specifically, TasksComponent which is exported by TaskModule
 */