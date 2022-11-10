import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Board } from 'src/app/models/board.model';
import { DbAccessService } from 'src/app/services/db-access.service';
import { KeywordService } from 'src/app/services/keyword.service';
import { FilterTasksPipe } from 'src/app/pipes/filter-tasks.pipe';

@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.css']
})
export class BoardlistComponent implements OnInit {
board:Board={id:0, name:'', description:'', date:'', todo:[{task:'', comments: []}], progress:[{task:'', comments: []}], done:[{task:'', comments: []}]};
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
  sendNote(){
    if(this.form.controls.note.value.trim().length > 0){
      this.arr.push({task:this.form.controls.note.value.slice(0, -1), comments:[]});
      switch(this.listNum){
        case 1:
          this.db.getBoard(this.id).subscribe(res => {this.board=res;
          this.board.todo = this.arr;
          this.db.changeBoard(this.board.id, this.board);
          });
          break;
        case 2:
          this.db.getBoard(this.id).subscribe(res => {this.board=res;
            this.board.progress= this.arr;
            this.db.changeBoard(this.board.id, this.board);
            });
            break;
        case 3:
          this.db.getBoard(this.id).subscribe(res => {this.board=res;
            this.board.done= this.arr;
            this.db.changeBoard(this.board.id, this.board);
            });
            break;
      }
      this.db.changeBoard(this.board.id, this.board);
      this.form.reset();
    }
  }
  constructor(private route: ActivatedRoute, public db:DbAccessService, public keyword:KeywordService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = params.id;
      this.db.getBoard(this.id).subscribe(res => this.board=res);
    }
    );
  }
  deleteNote(listNumber: number, el: string, i:number){
    this.arr = this.arr.filter((res, ind)=>i!=ind);
    switch (listNumber){
      case 1:
        this.db.getBoard(this.id).subscribe(res => {this.board=res;
          this.board.todo = this.arr;
          this.db.changeBoard(this.board.id, this.board);
        });
        break;
      case 2:
        this.db.getBoard(this.id).subscribe(res => {this.board=res;
          this.board.progress = this.arr;
          this.db.changeBoard(this.board.id, this.board);
        });
        break;
      case 3:
        this.db.getBoard(this.id).subscribe(res => {this.board=res;
          this.board.done = this.arr;
          this.db.changeBoard(this.board.id, this.board);
        });
        break;
      }
      this.db.changeBoard(this.board.id, this.board);
    }

    pushEdited(event, i: number, listNumber:number){
      let text = event.target.innerText;
      text = text.trim();
      this.arr[i] = {task: text, comments:this.arr[i].comments};
      switch(listNumber){
        case 1:
          this.db.getBoard(this.id).subscribe(res => {this.board=res;
            this.board.todo[i].task = text;
            this.db.changeBoard(this.board.id, this.board);
          });
          break;
        case 2:
          this.db.getBoard(this.id).subscribe(res => {this.board=res;
            this.board.progress[i].task = text;
            this.db.changeBoard(this.board.id, this.board);
          });
          break;
        case 3:
          this.db.getBoard(this.id).subscribe(res => {this.board=res;
            this.board.done[i].task = text;
            this.db.changeBoard(this.board.id, this.board);
          });
          break;
      }
    }

    comment(index:number){
      console.log(index);
      this.emiter.emit([this.listNum, index]);
    }


}
