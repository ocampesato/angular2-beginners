import {Component}   from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
 selector: 'todo-input',
 template: `<div>
             <input type="text" #myInput>
             <button (mouseover)="mouseEvent(myInput.value)">Mouse Over</button>
            </div>`
})
export class TodoInput{
   constructor(public todoService:TodoService) { 
    //console.log("constructor todoService: "+JSON.stringify(todoService));
   } 

   mouseEvent(value) {
    //console.log("mouseEvent todoService: "+JSON.stringify(this.todoService));
      this.todoService.todos.push(value);
      console.log("value: "+value);
      console.log("todos: "+this.todoService.todos);
   }
}

