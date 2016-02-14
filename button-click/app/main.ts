import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
   selector: 'my-app',
   template: `<div>
               <button (click)="clickMe()">ClickMe</button> 
              </div>`
})
export class UserInput{
   clickCount = 0;

   clickMe() {
      ++this.clickCount; 
      console.log("click count: "+this.clickCount);
   } 
}

bootstrap(UserInput);

