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
  id:number = 0;
  board:Board;


  constructor(private route: ActivatedRoute, public db:DbAccessService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => {
      this.id = params.id;
    }
    );
    this.db.getBoard(this.id).subscribe(res => {this.board=res;
      console.log(this.board);});
  }

}
