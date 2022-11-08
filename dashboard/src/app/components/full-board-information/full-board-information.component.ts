import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board.model';
import { ActivatedRoute } from '@angular/router';
import { DbAccessService } from 'src/app/services/db-access.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from
'@angular/cdk/drag-drop'


@Component({
  selector: 'app-full-board-information',
  templateUrl: './full-board-information.component.html',
  styleUrls: ['./full-board-information.component.css']
})
export class FullBoardInformationComponent implements OnInit {
  isVisibleForm1:boolean = false;
  isVisibleForm2:boolean = false;
  isVisibleForm3:boolean = false;
  id:number = 0;
  board:Board={id:0, name:'', description:'', date:'', todo:[], progress:[], done:[]};
  form1: FormGroup = new FormGroup({noteToDo: new FormControl<string>('', [
    Validators.required
  ])});
  form2: FormGroup = new FormGroup({noteProgress: new FormControl<string>('', [
    Validators.required
  ])});
  form3: FormGroup = new FormGroup({noteDone: new FormControl<string>('', [
    Validators.required
  ])});
  showBoard(){
    console.log(this.board);
  }
  sendToDo(){
    if(this.form1.controls.noteToDo.value.trim().length !== 0){
      this.board.todo.push(this.form1.controls.noteToDo.value.slice(0, -1));
      this.db.changeBoard(this.id, this.board);
      this.form1.reset();
    }
  }
  sendProgress(){
    if(this.form2.controls.noteProgress.value.trim().length !== 0){
      this.board.progress.push(this.form2.controls.noteProgress.value.slice(0, -1));
      this.db.changeBoard(this.id, this.board);
      this.form2.reset();
    }
  }
  sendDone(){
    if(this.form3.controls.noteDone.value.trim().length !== 0){
      this.board.done.push(this.form3.controls.noteDone.value.slice(0, -1));
      this.db.changeBoard(this.id, this.board);
      this.form3.reset();
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

 drop(event: CdkDragDrop<string[]>, listNumber: number) {
    if (event.previousContainer !== event.container) {
    transferArrayItem(event.previousContainer.data,event.container.data,
    event.previousIndex, event.currentIndex)
    } else {
      switch (listNumber){
        case 1:
          moveItemInArray(this.board.todo, event.previousIndex, event.currentIndex);
          break;
        case 2:
          moveItemInArray(this.board.progress, event.previousIndex, event.currentIndex);
          break;
        case 3:
          moveItemInArray(this.board.done, event.previousIndex, event.currentIndex);
      }
      }
      this.db.changeBoard(this.board.id, this.board);
    }
    deleteNote(listNumber: number, el: string){
      switch (listNumber){
        case 1:
          this.board.todo = this.board.todo.filter(member => member!=el);
          break;
        case 2:
          this.board.progress = this.board.progress.filter(member => member!=el);
          break;
        case 3:
          this.board.done = this.board.done.filter(member => member!=el);
      }
      this.db.changeBoard(this.board.id, this.board)
      console.log(this.board.done);
      //this.db.deleteBoard(this.db.boards[this.i].id).subscribe(res => res);
      //this.db.boards = this.db.boards.filter(el => el.id!=this.db.boards[this.i].id);
    }
    edit = 'Finall'
    pushEdited(event, i: number, listNumber:number){
      let text = event.target.innerText;
      text = text.trim();
      switch(listNumber){
        case 1:
          this.board.todo[i] = text;
          break;
        case 2:
          this.board.progress[i] = text;
          break;
        case 3:
          this.board.done[i] = text;
      }
      this.db.changeBoard(this.id, this.board);
      console.log(text);
    }
 }


