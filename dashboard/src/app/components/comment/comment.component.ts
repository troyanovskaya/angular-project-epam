import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments:string[] = ['There is a mistake', 'It is not achevable', 'What a mess!']

  constructor() { }

  ngOnInit(): void {
  }

}
