import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Board } from 'src/app/models/board.model';
import { DbAccessService } from 'src/app/services/db-access.service';

@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.css']
})
export class BoardlistComponent implements OnInit {
board:Board={id:0, name:'', description:'', date:'', todo:[], progress:[], done:[]};
@Input() arr: {task: string, comments: string[]}[];
@Input() listNum: number;
@Input() title: string = '';
@Input() doneIcon: boolean = false;
isVisibleForm:boolean = false;
id:number = 0;

  form: FormGroup = new FormGroup({note: new FormControl<string>('', [
    Validators.required
  ])});
  showBoard(){
    console.log(this.board);
  }
  sendNote(){
    if(this.form.controls.note.value.trim().length > 0){
      switch(this.listNum){
        case 1:
          this.board.todo.push(this.form.controls.note.value.slice(0, -1));
          break;
        case 2:
          this.board.progress.push(this.form.controls.note.value.slice(0, -1));
          break;
        case 3:
          this.board.done.push(this.form.controls.note.value.slice(0, -1));
          break;

      }
      this.arr.push(this.form.controls.note.value.slice(0, -1));
      this.db.changeBoard(this.id, this.board);
      this.form.reset();
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
  deleteNote(listNumber: number, el: string){
    switch (listNumber){
      case 1:
        this.board.todo = this.board.todo.filter(member => member.task!=el);
        this.arr = this.board.todo;
        break;
      case 2:
        this.board.progress = this.board.progress.filter(member => member.task!=el);
        this.arr = this.board.progress;
        break;
      case 3:
        this.board.done = this.board.done.filter(member => member.task!=el);
        this.arr = this.board.done;
      }
      this.db.changeBoard(this.board.id, this.board);
    }

    pushEdited(event, i: number, listNumber:number){
      let text = event.target.innerText;
      text = text.trim();
      this.arr[i] = text;
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
