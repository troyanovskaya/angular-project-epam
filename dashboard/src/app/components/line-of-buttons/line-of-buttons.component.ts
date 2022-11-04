import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { KeywordService } from 'src/app/services/keyword.service';

@Component({
  selector: 'app-line-of-buttons',
  templateUrl: './line-of-buttons.component.html',
  styleUrls: ['./line-of-buttons.component.css']
})
export class LineOfButtonsComponent {
  buttonNames = ['Show oldest projects', 'Show recent projects'];
  inputName = '';
  constructor(private keyService:KeywordService) { }

  emit(){
    this.keyService.key = this.inputName;
  }

}
