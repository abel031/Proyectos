import { Component, ViewChild } from '@angular/core';
import { Movie } from './movie';
import { TablaComponent } from './tabla/tabla.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  @ViewChild(TablaComponent) Tabla:TablaComponent;
  
  TablaVisible:boolean = true;
  EditarVisible:boolean = false;
  Actual = 0;

  constructor(){
    this.movie = this.movies[0];
  }

  Edit(i){
    this.Cambio();
    this.Actual = i;
    this.movie = this.movies[i];
  }
  Cambio(){
    this.TablaVisible=!this.TablaVisible;
    this.EditarVisible=!this.EditarVisible;
    this.Tabla.movies=this.movies;
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
    {code:0,title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:"2016-03-04"},  
    {code:1,title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:"2016-03-25"},  
    {code:2,title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:"2016-05-23"},  
    {code:3,title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:"2016-05-27"}  
  ]

}