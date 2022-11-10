import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTasks',
  pure: false
})
export class FilterTasksPipe implements PipeTransform {

  transform(list:{task:string, comments:string[]}[], search: string): {task:string, comments:string[]}[] {
    return list.filter(el => el.task.toLowerCase().includes(search.toLowerCase()));
  }

}
