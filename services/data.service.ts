import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { IMovies } from './IMovies';

@Injectable({
  providedIn: 'root'
})



export class DataService {
 
  
 static readonly imdb_api = '';
 themoviedb_key = 'eefc91d20886aa5dd3e65a6f8ea9187f'; 
 themoviedb_api = 'https://api.themoviedb.org/3/search/movie?api_key='+ this.themoviedb_key +'&language=en-US&query=';
 themoviedb_api_details = 'https://api.themoviedb.org/3/movie/';
 themoviedb_api_basic_image = 'https://image.tmdb.org/t/p/original/';
 op_paramters = '&page=1&include_adult=false';
 query: string;
 movies:IMovies[] =[];
 
 constructor(private http: HttpClient) { }


   get_random_movies()
 {
     var movies = this.get_movies_titles();
     var movie_tmp =  new IMovies();
     

     for(var i = 0; i< movies.length;i++)
     {
        this.query = movies[i];
        var url =  this.themoviedb_api + this.query + this.op_paramters;
        
        this.http.get(url).subscribe(movie => {
        movie_tmp.id  =  movie["results"][0].id;
        movie_tmp.genre = movie["results"][0].genre_ids;
        movie_tmp.release_date = movie["results"][0].release_date;
        movie_tmp.title = movie["results"][0].title;
        movie_tmp.poster = this.themoviedb_api_basic_image + movie["results"][0].poster_path;
        this.movies.push(movie_tmp);
        console.log(movie["results"][0]);
        movie_tmp = new IMovies();
       });
       

     }
     return this.movies;
 }

  get_movies_titles () {
   {
     return ['Star Wars: The Last Jedi','Beauty and the Beast','The Fate of the Furious','Thor: Ragnarok','Wolf Warrior 2','The Big Sick'];
   }

 }
}


