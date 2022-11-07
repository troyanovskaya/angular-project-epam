import { Component, OnInit, Input } from '@angular/core';
import { DbAccessService } from 'src/app/services/db-access.service';
import { Board } from '../../models/board.model'


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() board:Board
  @Input() i:any
  description = false;
  descriptionText='Show description';
  constructor(public db:DbAccessService){}
  inputVisible:boolean = false;
  inputName = '';

  changeButtonState(){

    this.description = !this.description;
    if(this.descriptionText === 'Show description'){
      this.descriptionText = 'Hide description';
    } else{
      this.descriptionText = 'Show description';
    }

  }

  deleteBoard(){
    this.db.deleteBoard(this.db.boards[this.i].id).subscribe(res => res);
    this.db.boards = this.db.boards.filter(el => el.id!=this.db.boards[this.i].id);
  }

  editBoard(){
    this.db.disableWhileEditing = true;
    this.inputName = this.db.boards[this.i].name;
    this.inputVisible = true;
  }

  ngOnInit(): void {
  }

  sendNewName(){
    this.db.disableWhileEditing = false;
    this.inputVisible = !this.inputVisible;
    console.log(this.inputName);
    this.db.boards[this.i].name = this.inputName;
    this.db.changeBoard(this.db.boards[this.i].id, this.db.boards[this.i]);

  }

}
