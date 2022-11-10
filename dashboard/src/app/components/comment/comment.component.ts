import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';
import { DbAccessService } from 'src/app/services/db-access.service';
import { VisibilityCommentsService } from 'src/app/services/visibility-comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() board: Board = {id:0, name:'', description:'', date:'', todo:[], progress:[], done:[]};
  @Input() emiter: number[];
  comments:string[] = [];
  public comInput: string = '';
  addCom(event){
    console.log(this.board);
    this.comments.push(event.target.value);
    switch(this.emiter[0]){
      case 1:
        this.board.todo[this.emiter[1]].comments = this.comments;
        break;
      case 2:
        this.board.progress[this.emiter[1]].comments = this.comments;
        break;
      case 3:
        this.board.done[this.emiter[1]].comments = this.comments;
        break;
    }
    console.log(this.emiter);
    this.db.changeBoard(this.board.id, this.board)
  }
  constructor(public db:DbAccessService, public visible:VisibilityCommentsService) { }

  ngOnInit(): void {
    switch(this.emiter[0]){
      case 1:
        this.comments = this.board.todo[this.emiter[1]].comments;
        break;
      case 2:
        this.comments = this.board.progress[this.emiter[1]].comments;
        break;
      case 3:
        this.comments = this.board.done[this.emiter[1]].comments;
        break;
    }
  }

}
