import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

//Service
import { ApiServiceService } from './api-service.service';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

//Routes
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';

//ReCaptcha
import { RecaptchaModule } from 'ng2-recaptcha';
import { ReCaptchaComponent } from './re-captcha/re-captcha.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    MovieListComponent,
    MovieDetailComponent,
    HeaderComponent,
    MenuComponent,
    EditMovieComponent,
    LoginComponent,
    ReCaptchaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
