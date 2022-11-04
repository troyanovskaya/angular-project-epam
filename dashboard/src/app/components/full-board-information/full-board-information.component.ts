import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board.model';

@Component({
  selector: 'app-full-board-information',
  templateUrl: './full-board-information.component.html',
  styleUrls: ['./full-board-information.component.css']
})
export class FullBoardInformationComponent implements OnInit {
  board: {
    name: string;
    date: string;
    description: string;
    todo: string[];
    progress: string[];
    done: string[];
} = {"name": "Cheese project7",
    "date": "29-4-2022",
    "description": "Project abot different types of cheese",
    todo: ['Present project', 'Push project'],
    "progress":["Update project", "Fix project"],
    "done": ["Create project"]
  }
  arr=[1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
    console.log(this.board.todo);
  }

}
