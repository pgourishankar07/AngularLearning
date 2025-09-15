import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  // @Input({required: true}) userId!: string;
  userId = input.required<string>(); // angular auto gets from withCompoentInputBindings() provider
  usersServ = inject(UsersService);
  userName = computed(() =>
    this.usersServ.users.find((u) => u.id === this.userId())?.name
  );
}
