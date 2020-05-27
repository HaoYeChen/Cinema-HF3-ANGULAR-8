import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Show } from 'src/app/model/Show';
import { Movie } from 'src/app/model/Movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

   /**
   * what dælen do we do?
   * DI route
   * init() => skal pakke vores objekt ud igen til et objekt
   * opfundet et obj som kan indeholde alle vores data!!
   */
  showId: number;
  showtime: number;

  title: string;
  showMovie: any[];

  movies:Movie[];
  shows: Show[];
  show: Show;

  constructor(private service:HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.show = new Show();
    this.service.getShows()
      .subscribe(arg => {
        this.shows = arg;
        console.log(this.shows);
      });
        this.service.getMovies()
        .subscribe(arg =>
          this.movies = arg);


      //this.route.queryParams.subscribe(
        //(objectReceived)=> this.movie = objectReceived["dataMovie"] // lige nu er det en string
        //(objectReceived)=> {
          //this.movies = JSON.parse(objectReceived["dataMovie"]) // dataMovie stammer fra movie.component.ts
          //og skal staves på samme måde
          //console.log(this.movies);
        //}
      //)
  }

}
