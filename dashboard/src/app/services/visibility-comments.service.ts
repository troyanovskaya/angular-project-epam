import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
true
@Injectable({
  providedIn: 'root'
})
export class VisibilityCommentsService {
visible = new BehaviorSubject<boolean>(false);
open(){
  this.visible.next(true);
}

close(){
  this.visible.next(false);
}
}


