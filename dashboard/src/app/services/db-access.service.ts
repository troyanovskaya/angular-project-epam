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
    this.getBoards().subscribe(res => {this.boards=res},
      err => console.log('Error Occured ' + err));
  }
  getBoards(){
    return this.http.get<Board[]>(this.url)
  }
  postBoard(board: Board){
    return this.http.post<Board>(this.url, board)
  }
  assignValue(){
    this.getBoards().subscribe(res => {this.boards=res},
      err => console.log('Error Occured ' + err));
  }
  addNote(id:number, board:Board){
    let url=this.url+'/'+id;
    this.http.put(url, board).subscribe(data => console.log(data));;
    console.log(url);
  }
}
