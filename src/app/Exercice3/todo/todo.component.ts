
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo= new Todo("","");
  todos:Todo[]=[];

  constructor(private todoService:TodoService) { 
    todoService.logger("Service Running");
  }
  
  ngOnInit(): void {
  this.todos=this.todoService.getTodo();
  }
  onSubmit() { 
    this.todos=this.todoService.addTodo(this.todo);
  this.todo=new Todo("",""); }
  
  deleteTodo(todoToDelete:Todo) {
    this.todos=this.todoService.deleteTodo(todoToDelete);
  }

}
