import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KeywordService } from 'src/app/services/keyword.service';
import { Board } from '../../models/board.model';
import { DbAccessService } from '../../services/db-access.service';

@Component({
  selector: 'app-line-of-boards',
  templateUrl: './line-of-boards.component.html',
  styleUrls: ['./line-of-boards.component.css']
})
export class LineOfBoardsComponent implements OnInit {
  form: FormGroup = new FormGroup({name: new FormControl<string>('', [
    Validators.required,
    Validators.minLength(5)
  ]),
  description: new FormControl<string>('', [
    Validators.required,
    Validators.minLength(5)
  ])})

  get name(){
    return this.form.controls.name as FormControl;
  }

  get description(){
    return this.form.controls.description as FormControl;
  }

  boards: Board[] = [];
  boardName='';
  boardDescription='';
  addBoard(){
    this.db.postBoard({"name": this.form.controls.name.value, "date": this.getProperDate(), "description" :this.form.controls.description.value, todo:[], progress:[], done:[]}).subscribe(res => 1,
        err => console.log('Error Occured ' + err));
    this.db.getBoards().subscribe(res => {this.boards=res},
        err => console.log('Error Occured ' + err));
  }
  getProperDate():string{
    let d = new Date();
    let datestring = d.getDate()  + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
    return datestring;
  }

  constructor(private db:DbAccessService, public keyService:KeywordService){}

  ngOnInit(): void {
    this.db.getBoards().subscribe(res => {this.boards=res},
      err => console.log('Error Occured ' + err));
  }

}
