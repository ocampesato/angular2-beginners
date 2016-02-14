import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
   selector: 'my-app',
   template: `<div>
               <ul>
                <li><img (click)="onClick()" width="100" height="100" src="sample1.png"></li>
                <li><img (click)="onClick()" width="100" height="100" src="sample2.png"></li>
                <li><img (click)="onClick()" width="100" height="100" src="sample3.png"></li>
               </ul>
              </div>
             `
})
class MyApp {
  onClick() {
    console.log("you clicked me");
  } 
}

bootstrap(MyApp);

