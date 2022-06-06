import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieTestService {
  url = 'http://localhost:3000/movie'
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }),
  }

  constructor( private http: HttpClient) { }

  getMovies(): Observable<any>{
    return this.http.get<any>(this.url)
      .pipe(
        tap(_ => console.log('Tap working')),
        catchError(this.handleError<any>('getMovies', {}))
    );
  }

  searchMovies(q: any): Observable<any>{
    return this.http.post<any>(this.url, q, this.httpOptions)
      .pipe(
        tap(_ => console.log('Tap working')),
        catchError(this.handleError<any>('getMovies', {}))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
