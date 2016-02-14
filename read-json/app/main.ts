import {bootstrap}      from 'angular2/platform/browser';
import {Component}      from 'angular2/core';
import {Inject}         from 'angular2/core';
import {Http}           from 'angular2/http';
import {HTTP_BINDINGS}  from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
   selector: 'my-app',
   template: `<button (click)="httpRequest()">Employee Info</button>
               <ul>
                 <li *ngFor="var emp of employees">
                   {{emp.fname}} {{emp.lname}} lives in {{emp.city}} 
                 </li>
               </ul>
             `
})
class MyApp {
  employees = [];

  constructor(@Inject(Http) public http:Http) { 
  }

  httpRequest() {  
    this.http.get('app/employees.json')
      .map(res => res.json())
      .subscribe(
        data => this.employees = data,
        err => console.log('error reading data: '+err),
        () => this.userInfo()
      );
  }

  userInfo() {  
 //console.log("employees = "+JSON.stringify(this.employees));
  }
}

bootstrap(MyApp, [HTTP_BINDINGS]);

