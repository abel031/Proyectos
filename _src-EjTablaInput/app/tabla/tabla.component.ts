import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() movies:Movie[];
  @Output() MiVar = new EventEmitter();

  Edit(i){
    this.MiVar.emit(i);
  }

}
