import { Component, OnInit } from '@angular/core';

// Service
import { ApiServiceService } from './../api-service.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  success_alert = false;
  error_alert = false;

  available_ratings = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];  // Max 10 rating.

  constructor(public API: ApiServiceService) { }

  ngOnInit() {
  }

  addMovie(mid: HTMLInputElement,
          title: HTMLInputElement,
          director: HTMLInputElement,
          producer: HTMLInputElement,
          rating: HTMLSelectElement) {

     let Input = {
       mid: Number(mid.value),
       title: title.value,
       director: director.value,
       producer: producer.value,
       rating: Number(rating.value)
     };

     this.API.addMovie(Input);

  }

}
