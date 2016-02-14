import {Component}  from 'angular2/core';
import {Injectable} from 'angular2/core';

@Component({
 selector: 'todo-service',
 template: `<div>
             <input type="text" #myInput>
             <button (mouseover)="mouseEvent($event,myInput.value)">Mouse Over</button>
            </div>`
})
export class TodoService {
   mouseCount = 0;
   todos = [];
   mouseEvent(event, value) {
      ++this.mouseCount; 
console.log("mouse count: "+this.mouseCount);
console.log(event, value);
   } 
}

