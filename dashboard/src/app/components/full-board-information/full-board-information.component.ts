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

  id:number = 0;

  constructor(private route: ActivatedRoute, private db:DbAccessService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = params.id;
    }
    );
    this.db.getBoards().subscribe(res => {this.boards=res},
      err => console.log('Error Occured ' + err));
  }

}
