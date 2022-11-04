import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board.model';
import { ActivatedRoute } from '@angular/router';
import { DbAccessService } from 'src/app/services/db-access.service';

@Component({
  selector: 'app-full-board-information',
  templateUrl: './full-board-information.component.html',
  styleUrls: ['./full-board-information.component.css']
})
export class FullBoardInformationComponent implements OnInit {
  boards:Board[] = [];
  // = {"name": "Cheese project7",
  //   "date": "29-4-2022",
  //   "description": "Project abot different types of cheese",
  //   todo: ['Present project', 'Push project'],
  //   "progress":["Update project", "Fix project"],
  //   "done": ["Create project"]
  // }
  arr=[1, 2, 3, 4];
  id:number = 0;

  constructor(private route: ActivatedRoute, private db:DbAccessService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = params.id;
    }
    );
    this.db.getBoards().subscribe(res => {this.boards=res;
    console.log(this.boards[this.id-1])},
      err => console.log('Error Occured ' + err));
    console.log(this.boards);
  }

}
