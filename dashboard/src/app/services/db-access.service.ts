import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Board } from '../models/board.model'

@Injectable({
  providedIn: 'root'
})
export class DbAccessService{
  url: string = 'http://localhost:3000/Boards'
  boards:Board[] = [];
  constructor(private http: HttpClient) {
    this.getBoards().subscribe(res => {this.boards=res});
  }
  getBoards(){
    return this.http.get<Board[]>(this.url)
  }
  getBoard(id:number){
    return this.http.get<Board>(`${this.url}/${id}`)
  }
  postBoard(board: Board){
    return this.http.post<Board>(this.url, board);
  }
  assignValue(){
    this.getBoards().subscribe(res => {this.boards=res});
  }
  addNote(id:number, board:Board){
    let b;
    let url=this.url+'/'+id;
    this.http.put(url, board).subscribe(data => b=data);;
    return b;
  }
  deleteBoard(id:number){
    return this.http.delete<Board>(`${this.url}/${id}`);
  }
}
