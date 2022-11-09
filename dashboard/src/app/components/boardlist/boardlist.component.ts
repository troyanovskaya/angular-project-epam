import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/board.model';

@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.css']
})
export class BoardlistComponent implements OnInit {
@Input() board:Board={id:0, name:'', description:'', date:'', todo:[], progress:[], done:[]};

  constructor() { }

  ngOnInit(): void {
  }

}
