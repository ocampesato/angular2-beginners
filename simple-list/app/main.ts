import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
   selector: 'my-app',
   template: `<div>
                <ul>
                  <li *ngFor="#user of users">
                    {{user}} 
                  </li>
                </ul>
              </div>`
})
class MyApp {
   users = ["Jane", "Dave", "Tom"];
}

bootstrap(MyApp);

