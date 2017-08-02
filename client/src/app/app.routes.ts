//Components
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoginComponent } from './login/login.component';
import { ReCaptchaComponent } from './re-captcha/re-captcha.component';


export var routes = [
    { path : 'add', component : AddMovieComponent },
    { path : 'list', component : MovieListComponent },
    { path : 'list', redirectTo: 'list'},
    { path : 'login', component : LoginComponent },
    { path : 'reCaptcha', component : ReCaptchaComponent }
];

