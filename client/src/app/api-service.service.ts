import { Injectable } from '@angular/core';
import { Http, Response, Request, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ApiServiceService {

  moviesList: Array<any> = [];

  constructor(public http: Http) { }

  getMovies() {
    console.log('Get all movies');

    this.http.get('http://localhost:3003/movies').subscribe((resp) => {
       console.log('All movies');

       this.moviesList = resp.json();
       console.log(this.moviesList);
    });
  }

  addMovie(Input) {
    /**
        mid: Number,
        title: String,  //required
        director: String, //required
        producer: String, //required
        cast: [],
        writer: [],
        releaseDate: Date,
        rating: Number, //required
        createdAt: Date,
        updatedAt: Date
     */
    // Headers
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

     // Request options
    let options = new RequestOptions({ headers: headers });


    const req_body = {
      mid: Input.mid,
      title: Input.title,
      director: Input.director,
      producer: Input.producer,
      rating: Input.rating
    };

    //POST request
    this.http.post('http://localhost:3003/movies', req_body, options)
        .subscribe((resp) => {
          console.log('Post request');
          console.log(resp);

          // return true;
        });
  }

  editMovie() {

  }

  deleteMovie() {

  }

}
