import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../models/board.model'

@Injectable({
  providedIn: 'root'
})
export class DbAccessService {
  url: string = 'http://localhost:3000/Boards  '
  constructor(private http: HttpClient) { }
  getBoards(){
    return this.http.get<Board[]>(this.url)
  }
}
