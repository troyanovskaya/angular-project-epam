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
  board:Board={id:0, name:'', description:'', date:'', todo:[], progress:[], done:[]};
  id:number = 0;
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
 }


