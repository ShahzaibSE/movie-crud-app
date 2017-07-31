//Components
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';


export var routes = [
    { path : 'add', component : AddMovieComponent },
    { path : 'list', component : MovieListComponent },
    { path : 'list', redirectTo: 'list'}
];

