import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { DbAccessService } from 'src/app/services/db-access.service';
import { KeywordService } from 'src/app/services/keyword.service';

@Component({
  selector: 'app-line-of-buttons',
  templateUrl: './line-of-buttons.component.html',
  styleUrls: ['./line-of-buttons.component.css']
})
export class LineOfButtonsComponent {
  buttonNames = ['Show oldest projects', 'Show recent projects'];
  inputName = '';
  constructor(private keyService:KeywordService, public db:DbAccessService) { }
  sortASC(){
    this.db.boards.sort((el1, el2)=>{
      let a = el1.date.split('-').reverse().join('');
      let b = el2.date.split('-').reverse().join('');
      return a.localeCompare(b);
    })

  }

  sortDSC(){
    this.db.boards.sort((el1, el2)=>{
      let a = el1.date.split('-').reverse().join('');
      let b = el2.date.split('-').reverse().join('');
      return b.localeCompare(a);
    })
  }
  emit(){
    this.keyService.key = this.inputName;
  }

}
