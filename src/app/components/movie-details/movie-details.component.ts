import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movies = Movie;
  constructor() { }

  ngOnInit(): void {
  }

}
