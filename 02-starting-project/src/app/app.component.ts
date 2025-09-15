import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
    const subscription = interval(1000)
      .pipe(map((i) => i * 2))
      .subscribe({
        next: (val) => console.log(val),
        error: (err) => console.log(err),
        // complete:console.log("Completed"),
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  /**
   * counter app below
   */

  counter = signal(0);
  onClick() {
    this.counter.update((i) => i + 1);
    
  }
}
