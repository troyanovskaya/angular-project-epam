import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-of-buttons',
  templateUrl: './line-of-buttons.component.html',
  styleUrls: ['./line-of-buttons.component.css']
})
export class LineOfButtonsComponent implements OnInit {
  buttonNames = ['Show oldest projects', 'Show recent projects'];

  constructor() { }

  ngOnInit(): void {
  }

}
