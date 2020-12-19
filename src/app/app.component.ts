import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  TablaVisible:boolean = false;
  EditarVisible:boolean = true;
  Actual = 0;

  Edit(i){
    this.Cambio();
    this.Actual = i;
    this.movie = this.movies[i];
  }
  Cambio(){
    this.TablaVisible=!this.TablaVisible;
    this.EditarVisible=!this.EditarVisible;
  }

  Next(){
    if(this.Actual<this.movies.length-1) this.Actual++;
    this.movie = this.movies[this.Actual];
  }

  Prev(){
    if(this.Actual>0) this.Actual--;
    this.movie = this.movies[this.Actual];
  }

  movie:Movie = {
    code:0,
    title:'',
    director:'',
    cast:'',
    releaseDate:''
  }
  
  movies:Movie[] =[
    {code:0,title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
    {code:1,title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
    {code:2,title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
    {code:3,title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'}  
  ]

}

export interface Movie {
  code:number;  
  title : string;  
  director : string;  
  cast : string;  
  releaseDate : string;  
}