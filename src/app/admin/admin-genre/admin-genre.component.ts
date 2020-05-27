import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { Genre } from 'src/app/model/Genre';

@Component({
  selector: 'app-admin-genre',
  templateUrl: './admin-genre.component.html',
  styleUrls: ['./admin-genre.component.css']
})
export class AdminGenreComponent implements OnInit {

  genreId: number;
  genre: any;

  genres: Genre[];
  ggenre: Genre;
  constructor(private service:HttpService, private router:Router) { }

  ngOnInit(): void {
    this.ggenre = new Genre();

    this.service.getGenre()
      .subscribe(arg => { //arg = får noget data fra API putter den i movies, som er en Callbackmetode - annonymous method
        this.genres = arg;
        console.log(arg);
      // this.service.getMovies().subscribe(this.svar);
      });
  }

  postGenre(){
    const genreToAdd = {
      genre: this.genre
    }
    this.service.postGenre(genreToAdd).subscribe(
      genreAdded => {this.genres.push(genreAdded)
      console.log(genreAdded);
    }
    );
  }

  updateGenre(){
    //this function should update
    console.log(this.genre);
    //return;
    this.service.updateGenre(this.genre.genreId,this.ggenre).subscribe(

    )
  }

  // delete Movie
  deleteGenre(genreToDelete:number){
    //console.log(movieToDelete);
    //return;
    //kalde vores service her!
    this.genres = this.genres.filter((movieObj)=>movieObj.genreId!==genreToDelete); //simulere at jeg slette 26
    //this.service.postMovie(movieToDelete).subscribe(
    this.service.deleteGenre(genreToDelete).subscribe();
  }

  //search for movie
  searchGenre(){
    //this function should parse an MovieId and the service to get a movie and return it to the movie object
    //fillout all the input text areas
    //console.log(this.genre.genre);

    this.service.searchGenre(this.ggenre.genre).subscribe(
      (genreFromApi)=> {
        this.ggenre=genreFromApi
        console.log(this.ggenre);
      }
    )
  }




}


