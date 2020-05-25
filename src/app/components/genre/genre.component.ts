import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { Genre } from 'src/app/model/Genre';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  genreId: number;
  //name: string; // har ikke bruge for det
  genre: any;

  genres: Genre[];
  constructor(private service:HttpService) { }

  ngOnInit(): void {

    // pas nu på med short-hands 'snippets'
    this.service.getGenre()
      .subscribe(arg => {
        this.genres = arg;
        console.log(this.genres);
      });

  }

}
