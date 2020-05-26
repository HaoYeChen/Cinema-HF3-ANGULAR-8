import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/Http';
import { Genre } from '../model/Genre';
import { Observable, observable } from 'rxjs';
import { Movie } from '../model/Movie';
import { Seat } from '../model/Seat';
import { Show } from '../model/Show';
import { Theater } from '../model/Theater';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getSeat() {
    throw new Error("Method not implemented.");
  }
  //cinema
  url:string = 'https://localhost:44368/api/movies';
  urlStart:string = 'https://localhost:44368/api/';
  //register
  userURL:string =  'http://localhost:58435/api/';

  constructor(private http:HttpClient, private fb:FormBuilder) { }

  //register
  formModel= this.fb.group({
    UserName: ['', Validators.required],
    Email: ['',Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required],
    },{validators: this.comparePasswords})

  })

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');

    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register(){
    var body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(`${this.userURL}applicationuser/register`,body);
  }




  //Genre
  getGenre():Observable<Genre[]>{
    return this.http.get<Genre[]>(`${this.urlStart}genres`);
  }

  //Movie
  //get
  getMovies():Observable<Movie[]>{
   return this.http.get<Movie[]>(`${this.urlStart}movies`); ///movies/allmovies
}
  //post
  postMovie(movieToAdd:any):Observable<Movie>{ //<Movie> post 1 movie, der var felj <Movie[]> giver felj fordi den poster flere
    return this.http.post<Movie>(`${this.urlStart}movies`,movieToAdd,httpOptions); //httpoptions sender en json
}
  //delete
  deleteMovie(movieToDelete:number):Observable<Movie>{
    return this.http.delete<Movie>(`${this.urlStart}movies/${movieToDelete}`,httpOptions);
  }

  //update
  updateMovie(movieIdFromHtml:number, movieToUpdate:Movie):Observable<Movie>{
    return this.http.put<Movie>(`${this.urlStart}movies/${movieIdFromHtml}`, movieToUpdate , httpOptions);
  }


  //search movieByTitle
  searchMovie(searchMovie:string):Observable<Movie>{
    return this.http.get<Movie>(`${this.urlStart}movies/search?title=${searchMovie}`, httpOptions);
  }



  //Seat
  //get
  getSeats():Observable<Seat[]>{
    return this.http.get<Seat[]>(`${this.urlStart}seats`);
  }




  //Show
  //get
  getShows():Observable<Show[]>{
    return this.http.get<Show[]>(`${this.urlStart}shows`);
  }
}
