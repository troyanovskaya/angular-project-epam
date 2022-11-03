import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/models/board.model';

@Component({
  selector: 'app-line-of-buttons',
  templateUrl: './line-of-buttons.component.html',
  styleUrls: ['./line-of-buttons.component.css']
})
export class LineOfButtonsComponent {
  buttonNames = ['Show oldest projects', 'Show recent projects'];
  inputName = '';
  @Output() emitter:EventEmitter<string>
  = new EventEmitter<string>();

  constructor() { }


  emit(keyword: string){
    this.emitter.emit(keyword);
  }

}
