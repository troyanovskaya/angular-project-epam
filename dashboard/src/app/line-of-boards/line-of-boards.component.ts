import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-of-boards',
  templateUrl: './line-of-boards.component.html',
  styleUrls: ['./line-of-boards.component.css']
})
export class LineOfBoardsComponent implements OnInit {
  boardName='';
  boardDescription='';
  boards:{name:string, date:string, description:string}[] = [{'name':'Cheese project', 'date': '29-10-2022', 'description':'Project abot different types of cheese'},
  {'name':'Haribo', 'date': '29-10-2022', 'description':'Project about yammy candies'},
  {'name':'English channel', 'date': '19-10-2022', 'description':'project on the field of transportation through channel'},
  {'name':'Comb', 'date': '29-09-2022', 'description':'Project about comb'},
  {'name':'Rick and his dog', 'date': '19-09-2022', 'description':'Project about Rick`s animals'},
  {'name':'Three leaves', 'date': '29-10-2021', 'description':'Flora of West region of England'}];
  addBoard(){
    this.boards.push({name: this.boardName, date: this.getProperDate(), description:this.boardDescription})
    // this.boards.push({name: 'QQQQQ', date: this.getProperDate()})

  }
  getProperDate():string{
    let d = new Date();
    let datestring = d.getDate()  + '-' + (d.getMonth()+1) + '-' + d.getFullYear();
    return datestring;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
