import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputNameService implements OnInit {
  ngOnInit(): void {
    let a = document.querySelector('#input-name');
    alert(a);
  }
  constructor() { }
}
