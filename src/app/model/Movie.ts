import { Genre } from './Genre';

export class Movie{
  movieId: number;
  title: string;
  runtime: number;
  description: string;
  releasedate: Date;
  movieGenre: any[]; //den var genre[] før
}
