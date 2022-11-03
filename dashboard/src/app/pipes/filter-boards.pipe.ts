import { Pipe, PipeTransform } from '@angular/core';
import { Board } from '../models/board.model';

@Pipe({
  name: 'filterBoards'
})
export class FilterBoardsPipe implements PipeTransform {

  transform(boards: Board[], search: string): Board[] {
    return boards.filter(b => b.name.toLowerCase().includes(search.toLowerCase()))
  }

}
