import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
   selector: 'my-app',
   template: `<div>
               <input #fname> 
               <button (click)="clickMe(fname.value)">ClickMe</button> 
                <ul>
                  <li *ngFor="#user of users">
                    {{user}} 
                  </li>
                </ul>
              </div>`
})
class MyApp {
   users = ["Jane", "Dave", "Tom"];

   clickMe(user) {
      console.log("new user = "+user);
      this.users.push(user);
/*
      // prevent empty user or duplicates
      if(user is non-null) {
        if(user is duplicate) {
          // display alert message 
        } else { 
          // display alert message 
        } 
      } else { 
        // display alert message 
      } 
*/
   } 
}

bootstrap(MyApp);

