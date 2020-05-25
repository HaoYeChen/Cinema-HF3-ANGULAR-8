import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { GenreComponent } from './components/genre/genre.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { ShowComponent } from './components/show/show.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';


//Routing and Navigation
const routes: Routes = [
  {path:'', redirectTo:'/user/registration', pathMatch: 'full'},
  {path: 'user', component:UserComponent, children:[
    {path:'registration', component:RegistrationComponent}
  ]},
  {path: 'adminMovie', component:AdminMovieComponent},
  {path: 'movies', component: MovieComponent},
  {path: 'genres', component: GenreComponent},
  {path: 'show', component: ShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//array for alle components import til app.modules.ts istedet for en af hver
//export const routingComponents = [MovieComponent, GenreComponent]
