import { Component, OnInit } from '@angular/core';
import { DataService } from 'services/data.service';
import { IMovies } from 'services/IMovies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies :IMovies[];

  constructor(private dataservice:DataService) { }

   ngOnInit() {
    this.movies = this.dataservice.get_random_movies();
   }

   print_movies(){
     console.log(this.movies);
   }

   edit(){
     
   }
}
