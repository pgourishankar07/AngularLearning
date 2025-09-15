// src/app/counter/counter.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // For NgIf, NgFor etc.
import { Store } from '@ngrx/store'; // Import Store
import { Observable } from 'rxjs'; // For reactive programming with Observable

import { increment, decrement, reset, setName } from '../action/counter.action'; // Import actions
import { selectCount, selectName, selectReason } from '../selector/counter.selector'; // Import selector

@Component({
  selector: 'app-counter',
  standalone: true, // If using standalone components
  imports: [CommonModule],
  template: `
    <h2>NGRX Counter Example</h2>
    <p>Current Count: {{ count$ | async }}</p>
    <button (click)="onIncrement()">Increment</button>
    <button (click)="onDecrement()" style="margin-left: 10px;">Decrement</button>
    <button (click)="onReset()" style="margin-left: 10px;">Reset</button>
    <p>{{ resetString$ | async }}</p>
    <p>{{ nameString$ | async }}</p>
  `,
  styles: [`
    button { padding: 8px 15px; border: 1px solid #ccc; border-radius: 5px; cursor: pointer; }
    button:hover { background-color: #eee; }
  `]
})
export class CounterComponent implements OnInit {
  // Declare an Observable to hold the count from the store
  count$!: Observable<number>;
  resetString$!:Observable<string>;
  nameString$!:Observable<string>;

  constructor(private store: Store) {} // Inject the NGRX Store

  ngOnInit() {
    // Select the 'count' from the store using our selector
    this.count$ = this.store.select(selectCount);
    this.resetString$ = this.store.select(selectReason); // Select the reason for reset
    this.nameString$ = this.store.select(selectName)
  }

  onIncrement() {
    // Dispatch the 'increment' action
    this.store.dispatch(increment());
  }

  onDecrement() {
    // Dispatch the 'decrement' action
    this.store.dispatch(decrement());
  }

  onReset() {
    // Dispatch the 'reset' action
    this.store.dispatch(reset({reason: 'User clicked reset'}));
    this.store.dispatch(setName());
  }
}