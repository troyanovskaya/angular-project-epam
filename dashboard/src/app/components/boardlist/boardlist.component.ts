import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
@Output() emiter = new EventEmitter<number[]>();
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
          this.board.todo.push({task:this.form.controls.note.value.slice(0, -1), comments:[]});
          break;
        case 2:
          this.board.progress.push({task:this.form.controls.note.value.slice(0, -1), comments:[]});
          break;
        case 3:
          this.board.done.push({task:this.form.controls.note.value.slice(0, -1), comments:[]});
          break;

      }
      this.arr.push({task:this.form.controls.note.value.slice(0, -1), comments:[]});
      this.db.changeBoard(this.id, this.board);
      this.db.assignValue();
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
      this.db.assignValue();
    }

    pushEdited(event, i: number, listNumber:number){
      let text = event.target.innerText;
      text = text.trim();
      this.arr[i].task = text;
      switch(listNumber){
        case 1:
          this.board.todo[i].task = text;
          break;
        case 2:
          this.board.progress[i].task = text;
          break;
        case 3:
          this.board.done[i].task = text;
      }
      this.db.changeBoard(this.id, this.board);
    }

    comment(index:number){
      console.log(index);
      this.emiter.emit([this.listNum, index]);
    }


}
