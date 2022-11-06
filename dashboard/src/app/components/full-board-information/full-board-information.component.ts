import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board.model';
import { ActivatedRoute } from '@angular/router';
import { DbAccessService } from 'src/app/services/db-access.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-full-board-information',
  templateUrl: './full-board-information.component.html',
  styleUrls: ['./full-board-information.component.css']
})
export class FullBoardInformationComponent implements OnInit {
  id:number = 0;
  board:Board;
  form1: FormGroup = new FormGroup({noteToDo: new FormControl<string>('', [
    Validators.required
  ])})
  showBoard(){
    console.log(this.board);
  }
  sendToDo(){
    if(this.form1.controls.noteToDo.value.trim().length !== 0){
      this.board.todo.push(this.form1.controls.noteToDo.value.slice(0, -1));
      this.db.addNote(this.id, this.board);
      this.form1.reset();
    }
  }
  constructor(private route: ActivatedRoute, public db:DbAccessService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = params.id;
      this.db.getBoard(this.id).subscribe(res => this.board=res);
    }
    );

  }

}
