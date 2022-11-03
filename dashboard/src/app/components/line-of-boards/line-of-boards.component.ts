import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Board } from '../../models/board.model';
import { DbAccessService } from '../../services/db-access.service';

@Component({
  selector: 'app-line-of-boards',
  templateUrl: './line-of-boards.component.html',
  styleUrls: ['./line-of-boards.component.css']
})
export class LineOfBoardsComponent implements OnInit {
  form = new FormGroup({name: new FormControl<string>('', [
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
  @Input() keyword:string='';
  // _boards:Board[] = [{'name':'Cheese project', 'date': '29-10-2022', 'description':'Project abot different types of cheese'},
  // {'name':'Haribo', 'date': '29-10-2022', 'description':'Project about yammy candies'},
  // {'name':'English channel', 'date': '19-10-2022', 'description':'project on the field of transportation through channel'},
  // {'name':'Comb', 'date': '29-09-2022', 'description':'Project about comb'},
  // {'name':'Rick and his dog', 'date': '19-09-2022', 'description':'Project about Rick`s animals'},
  // {'name':'Three leaves', 'date': '29-10-2021', 'description':'Flora of West region of England'}];
  addBoard(){
    //this.boards.push({name: this.boardName, date: this.getProperDate(), description:this.boardDescription})
    console.log(this.form.value);
    // this.boards.push({name: 'QQQQQ', date: this.getProperDate()})
  }
  getProperDate():string{
    let d = new Date();
    let datestring = d.getDate()  + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
    return datestring;
  }

  constructor(private db:DbAccessService){}
  ngOnInit(): void {
    this.db.getBoards().subscribe(res => {this.boards=res;
    console.log(res)},
      err => console.log('Error Occured ' + err))
  }

}
