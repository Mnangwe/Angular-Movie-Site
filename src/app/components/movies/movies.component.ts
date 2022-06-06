import { Component, OnInit } from '@angular/core';
import { MovieTestService } from 'src/app/services/movie-test.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  data: any
  movies: any
  constructor( private movie: MovieTestService) { }
  
  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
    this.movie.getMovies().subscribe(res => {
      console.log(res)
      this.data = res.d
    })
  }

  searchMovie(search: any) {
    search = search.trim();
    if(!search) { return }
    this.movie.searchMovies({ search })
      .subscribe( res => {
        console.log(res)
        this.movies = res.d
      })
  }
}
