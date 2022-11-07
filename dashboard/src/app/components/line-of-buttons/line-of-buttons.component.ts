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
  downDropHidden:boolean = true;
  optionNames = ['None', 'By name', 'By date', 'By todo notes number',
  'By in progress notes number', 'By done notes number'];
  buttonChoose1:boolean = false;
  buttonChoose2:boolean = false;
  sort:string = 'None';
  inputName = '';
  ngOnInit(){
    console.log('!');
  }
  constructor(private keyService:KeywordService, public db:DbAccessService) { }
  sortASCByName(){
      this.db.boards.sort((el1, el2)=>{
      let a = el1.name;
      let b = el2.name;
      return a.localeCompare(b);
    })
  }

  sortDESCByName(){
      this.db.boards.sort((el1, el2)=>{
      let a = el1.name;
      let b = el2.name;
      return b.localeCompare(a);
    })
  }
  sortASCByDate(){
    this.db.boards.sort((el1, el2)=>{
      let a = el1.date.split('-').reverse().join('');
      let b = el2.date.split('-').reverse().join('');
      return a.localeCompare(b);
    })
  }
  sortDESCByDate(){
    this.db.boards.sort((el1, el2)=>{
      let a = el1.date.split('-').reverse().join('');
      let b = el2.date.split('-').reverse().join('');
      return b.localeCompare(a);
    })
  }

  sortASCByToDoNumber(){
    this.db.boards.sort((el1, el2)=>{
      let a = el1.todo.length;
      let b = el2.todo.length;
      return a - b;
    })
  }
  sortDESCByToDoNumber(){
    this.db.boards.sort((el1, el2)=>{
      let a = el1.todo.length;
      let b = el2.todo.length;
      return b - a;
    })
  }

  sortASCByProgressNumber(){
    this.db.boards.sort((el1, el2)=>{
      let a = el1.progress.length;
      let b = el2.progress.length;
      return a - b;
    })
  }
  sortDESCByProgressNumber(){
    this.db.boards.sort((el1, el2)=>{
      let a = el1.progress.length;
      let b = el2.progress.length;
      return b - a;
    })
  }

  sortASCByDoneNumber(){
    this.db.boards.sort((el1, el2)=>{
      let a = el1.done.length;
      let b = el2.done.length;
      return a - b;
    })
  }
  sortDESCByDoneNumber(){
    this.db.boards.sort((el1, el2)=>{
      let a = el1.done.length;
      let b = el2.done.length;
      return b - a;
    })
  }

  emit(){
    this.keyService.key = this.inputName;
  }
  passOption(name: string){
    this.sort = name;
    if(this.buttonChoose1 || this.buttonChoose2){
      switch (this.sort) {
        case this.optionNames[1]:
          this.buttonChoose1 ? this.sortASCByName():this.sortDESCByName();
          break;
        case this.optionNames[2]:
          this.buttonChoose1 ? this.sortASCByDate():this.sortDESCByDate();
          break;
        case this.optionNames[3]:
          this.buttonChoose1 ? this.sortASCByToDoNumber():this.sortDESCByToDoNumber();
          break;
        case this.optionNames[4]:
          this.buttonChoose1 ? this.sortASCByProgressNumber():this.sortDESCByProgressNumber();
          break;
        case this.optionNames[5]:
          this.buttonChoose1 ? this.sortASCByDoneNumber():this.sortDESCByDoneNumber();
          break;
        default:
          console.log(`Sorry, none`);
      }
    }
    this.downDropHidden = true;
  }
  push1(){
    if(!this.db.disableWhileEditing){
      this.buttonChoose1=!this.buttonChoose1;
      if(this.buttonChoose2 && this.buttonChoose1){
        this.buttonChoose2 = false;
      }
      this.passOption(this.sort);
    }
  }

  push2(){
    if(!this.db.disableWhileEditing){
      this.buttonChoose2=!this.buttonChoose2;
      if(this.buttonChoose1 && this.buttonChoose2){
        this.buttonChoose1 = false;
      }
      this.passOption(this.sort);
    }
  }
  clickDropDown(){
    if(!this.db.disableWhileEditing){
      this.downDropHidden=!this.downDropHidden
    }
  }
}
