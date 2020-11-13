import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  logger(thing:unknown){
   console.log(thing);
  }
 todos:Todo[]=[
   new Todo("Monday","Go to Insat"),
   new Todo("Tuesday","Stay home "),

 ];

  addTodo(todo :Todo){
    this.todos.push(todo);
 return this.todos;
    }
 
  deleteTodo(todoToDelete:Todo){
    const indexOfNoteToDelete = this.todos.indexOf(todoToDelete);
    this.todos.splice(indexOfNoteToDelete, 1);
    return this.todos;
    }

  getTodo(){
    return this.todos;
  }
    
}
