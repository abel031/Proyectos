import { Component, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  
  @Output() MiVar = new EventEmitter();

  movies:Movie[];

  Edit(i){
    this.MiVar.emit(i);
  }

}
