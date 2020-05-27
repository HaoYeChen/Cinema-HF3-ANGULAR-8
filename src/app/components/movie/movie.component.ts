import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Movie } from 'src/app/model/Movie';
import { Genre } from 'src/app/model/Genre';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  //Redundant der jeg har data i Movie.ts
  movieId: number;
  title: string;
  runtime: number;
  description: string;
  releasedate: Date;
  movieGenre: any[];
  temp: any[];

  movies: Movie[];
  genres: Genre[];

  //DP (Design Princip) (Thoughts)
  //DI (Dependency Injection / Design pattern) (Implementation)
  constructor(private service:HttpService, private router:Router) { }

  ngOnInit(): void {

    this.service.getMovies()
      .subscribe(arg => { //arg = får noget data fra API putter den i movies, som er en Callbackmetode - annonymous method
        this.movies = arg;
        console.log(arg);
      // this.service.getMovies().subscribe(this.svar);
      });
       this.service.getGenre()
       .subscribe(arg =>
         this.genres = arg);
    //});
  }

    //post/add Movie
    postMovie(){
      //alert('klikker');
      console.log(this.temp);


      //let tt: any = JSON.parse(`{"genre":{"genreId":${this.temp}}}`);
      let tt: any = JSON.parse(`{"genreId":${this.temp}}`);
      console.log(tt);
      //return;

      //tester array af genre
      //let tempGenre: any = [
        //{
          //"genreId":1
        //}
      //];

      //vil gerne parse data til vores service
      const movieToAdd = {
        title: this.title,
        runtime: this.runtime,
        description: this.description,
        //movieGenre: this.movieGenre,
        movieGenre: [tt]

      }
      console.log(movieToAdd);
      //return;
      //this.service.postMovie(movieToAdd).subscribe(); //poster data ud men bliver ikke vist på browser før man f5

      this.service.postMovie(movieToAdd).subscribe(
        movieAdded => {this.movies.push(movieAdded)
        console.log(movieAdded);
      }
      );
    }

    // delete Movie
    deleteMovie(movieToDelete:number){
      //console.log(movieToDelete);
      //return;
      //kalde vores service her!
      this.movies = this.movies.filter((movieObj)=>movieObj.movieId!==movieToDelete); //simulere at jeg slette 26
      //this.service.postMovie(movieToDelete).subscribe(
      this.service.deleteMovie(movieToDelete).subscribe();
    }

    // svar(arg:Movie[]){
    //   this.movies=arg;
    //   console.log("test");
    //   console.log(this.movies); //vores view bliver ikke updated!
    // }

    allShowToMovie(movieObjectToShow:Movie){
      console.log(movieObjectToShow);
      //return;
      // wants a new component to go to
      // how do I go to another component?
      //https://stackoverflow.com/questions/36835123/how-do-i-pass-data-to-angular-routed-components
      let tempParams: NavigationExtras = {
        queryParams: {
            "dataMovie": JSON.stringify(movieObjectToShow)
        }
      };
      this.router.navigate(["show"], tempParams )
    }// end method allShowToMovie


}
