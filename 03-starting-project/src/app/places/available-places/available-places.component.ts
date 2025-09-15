import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);

  httpClient = inject(HttpClient); // inject this dependency

  destroyRef = inject(DestroyRef);
  isFetching = signal(false); // while fetching loading symbol
  error = signal('');

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places', {
        observe: 'response',
      })
      .pipe(map((response) => response.body?.places))
      .subscribe({
        next: (val) => {
          console.log(val);
          this.places.set(val);
        },
        complete: () => {
          this.isFetching.set(false);
        },
        error: (err) => {
          this.error.set(err.message);
        },
      }); // u need to subscribe to get data from Observable

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  // send put request when image is clicked
  
  onSelectPlace(selectedPlace: Place) {
    this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: selectedPlace.id,
      })
      .subscribe({
        next: (val) => {
          console.log(val);
        },
        complete: () => {
          console.log('Updated');
        },
      });
  }
}

/**
 * configuring Http Request :
 * observe : 'response' -> to send data in HttpResponse Object with all details
 * observe : 'event'
 *
 */
