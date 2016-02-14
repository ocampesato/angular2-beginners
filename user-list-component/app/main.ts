import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {User}      from './new-user';

@Component({
   selector: 'my-app',
   template: `<div>
               <input #fname> 
               <button (click)="clickMe(fname.value)">ClickMe</button> 
                <ul>
                  <li *ngFor="#user of users">
                    {{user.fname}} 
                  </li>
                </ul>
              </div>`
})
class MyApp {
   newUser:User; 
   users = [
             new User("Jane"), 
             new User("Dave"), 
             new User("Tom") 
           ];

   clickMe(user) {
      console.log("creating new user: "+user);
      this.newUser = new User(user);
      this.users.push(this.newUser);
   } 
}

bootstrap(MyApp);

