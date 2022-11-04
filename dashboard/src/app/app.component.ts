import { Component, OnInit } from '@angular/core';
import { DbAccessService } from './services/db-access.service';
import { KeywordService } from './services/keyword.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KeywordService]
})

export class AppComponent{
  title = 'dashboard';
  constructor(private keyService:KeywordService){
  }
}
