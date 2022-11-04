import { Component, OnInit } from '@angular/core';
import { DbAccessService } from './services/db-access.service';
import { Board } from './models/board.model'
import { KeywordService } from './services/keyword.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KeywordService]
})

export class AppComponent{
  title = 'dashboard';
  // keyword = "";
  // send(keyword: string){
  //   this.keyword = keyword;
  // }
  constructor(private keyService:KeywordService){
    // console.log(keyService);
  }
  // showKey(){
  //   console.log(this.keyService);
  // }

}
