export interface Board{
  id:number;
  name: string;
  date: string;
  description: string;
  todo: {task: string, comments: string[]}[];
  progress: {task: string, comments: string[]}[];
  done: {task: string, comments: string[]}[]
}
