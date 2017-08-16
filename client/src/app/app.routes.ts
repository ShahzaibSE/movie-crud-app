//Components
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { LoginComponent } from './login/login.component';
import { ReCaptchaComponent } from './re-captcha/re-captcha.component';
import { SampleProtectedRouteComponent } from './sample-protected-route/sample-protected-route.component';
import { TableSortComponent } from './table-sort/table-sort.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Service
import { AuthService } from './auth.service';
import { LoggedInGuard } from './guard.service';


export var routes = [
    { path : 'add', component : AddMovieComponent },
    // { path : 'list', component : MovieListComponent },
    { path : 'list', component : TableSortComponent },
    { path : '', redirectTo: 'add', pathMatch: 'full'},
    { path : 'login', component : LoginComponent },
    { path : 'reCaptcha', component : ReCaptchaComponent },
    // { path : 'dashboard', component : DashboardComponent, CanActivate : [LoggedInGuard] }
    { path : 'dashboard', component : DashboardComponent }
    // { path : 'protected', component : SampleProtectedRouteComponent, CanActivate : [LoggedInGuard] }
];

