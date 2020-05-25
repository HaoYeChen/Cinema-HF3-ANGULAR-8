import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/Http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { GenreComponent } from './components/genre/genre.component';
import { MovieComponent } from './components/movie/movie.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SeatComponent } from './components/seat/seat.component';
import { ShowComponent } from './components/show/show.component';
import { TheaterComponent } from './components/theater/theater.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { HttpService } from './service/http.service';
import { AdminGenreComponent } from './admin/admin-genre/admin-genre.component';
import { AdminSeatComponent } from './admin/admin-seat/admin-seat.component';
import { AdminShowComponent } from './admin/admin-show/admin-show.component';
import { AdminTheaterComponent } from './admin/admin-theater/admin-theater.component';

@NgModule({
  declarations: [ //components, directives, pipes
    AppComponent,
    GenreComponent,
    MovieComponent,
    TopBarComponent,
    SeatComponent,
    ShowComponent,
    TheaterComponent,
    AdminMovieComponent,
    UserComponent,
    RegistrationComponent,
    AdminGenreComponent,
    AdminSeatComponent,
    AdminShowComponent,
    AdminTheaterComponent
  ],
  imports: [ //Module
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService], // inject httpservice så registration kan få adgang til den //eksterne ting, service
  bootstrap: [AppComponent]
})
export class AppModule { }
