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
    telefonos:[],
    cast:'',
    releaseDate:'',
    calificacion:"",
    Vista:""
  }
  
  movies: Movie[] = [
    {
      code: 1,
      title: "Zootopia",
      director: "Byron Howard, Rich Moore",
      telefonos: ["648210025", "648210025", "648210025"],
      cast: "Idris Elba, Ginnifer Goodwin, Jason Bateman",
      releaseDate: "2016-03-04", // "04/03/2016",
      calificacion: "Buena",
      Vista: "Vista"
    },
    {
      code: 2,
      title: "Batman v Superman: Dawn of Justice",
      director: "Zack Snyder",
      telefonos: ["648210025", "648210025", "648210025"],
      cast: "Ben Affleck, Henry Cavill, Amy Adams",
      releaseDate: "2016-03-25",
      calificacion: "Buena",
      Vista: "NoVista"
    },
    {
      code: 3,
      title: "Captain America: Civil War",
      director: "Anthony Russo, Joe Russo",
      telefonos: ["648210025", "648210025", "648210025"],
      cast: "Scarlett Johansson, Elizabeth Olsen, Chris Evans",
      releaseDate: "2016-05-23",
      calificacion: "Buena",
      Vista: "NoVista"
    },
    {
      code: 4,
      title: "X-Men: Apocalypse",
      director: "Bryan Singer",
      telefonos: ["648210025", "648210025", "648210025"],
      cast: "Jennifer Lawrence, Olivia Munn, Oscar Isaac",
      releaseDate: "2016-05-27",
      calificacion: "Buena",
      Vista: "NoVista"
    }
  ];

  //Nou
  Calificaciones = ["Mala", "Buena", "Muy Buena", "Excelente"];

}

interface Movie {
  code: number;
  title: string;
  director: string;
  telefonos: string[];
  cast: string;
  releaseDate: string;
  calificacion: String;
  Vista: String;
}