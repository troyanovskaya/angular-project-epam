import { Component, OnInit } from '@angular/core';
import { DbAccessService } from './services/db-access.service';
import { Board } from './models/board.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title = 'dashboard';
  keyword = "";
  // boards: Board[] = [];
  send(keyword: string){
    this.keyword = keyword;
  }
  // constructor(private db:DbAccessService){}
  // ngOnInit(): void {
  //   this.db.getBoards().subscribe(res => {this.boards=res;
  //   console.log(res)},
  //     err => console.log('Error Occured ' + err))
  // }
}
