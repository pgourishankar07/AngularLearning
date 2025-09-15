import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { User } from '../../model/user.model';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter(); // initialize an eventEmitter - to create our cusotm event select

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id); // emitting the event
  }
}

/**
 *
 * variables inside the class - properties
 * @Input() decorator in Angular is used for passing data from a parent component to a child component. - variable name should be same as parent template as it is coming from there. - and then from here goes to the templateURL to render
 *
 * avatar!: string;, optional -  you're telling TypeScript, "I know this property (avatar) will eventually be assigned a value, even though I'm not assigning it here in the constructor or at the point of declaration. Trust me, it will be initialized.
 *
 * 
 * to use in signals
 * 
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());

  when this method is called onSelectUser - it will emit with id by the eventemitter
 */

// select = output<string>();  // this is the modern method of declarying event emitter
// @Input({ required: true }) avatar!: string; // this means parent must pass this or else warning in the parent template
// @Input() name!: string;
// @Input() id!: string;
