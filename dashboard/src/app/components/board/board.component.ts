import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../../models/board.model'


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() board:Board
  @Input() i:number
  description = false;
  descriptionText='Show description';

  changeButtonState(){
    this.description = !this.description;
    if(this.descriptionText === 'Show description'){
      this.descriptionText = 'Hide description';
    } else{
      this.descriptionText = 'Show description';
    }

  }

  ngOnInit(): void {
  }

}
