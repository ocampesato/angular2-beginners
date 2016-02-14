import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Custom1}   from './my-custom1';

@Component({
   selector: 'my-app',
   directives: [Custom1], 
   styles:   [`li { display: inline; }`],
   template: `<div>
               <ul>
                <li><img (click)="onClick()" 
                         width="100" height="100" src="sample1.png"></li>
                <li><img (click)="onClick()" 
                         width="100" height="100" src="sample2.png"></li>
                <li><img (click)="onClick()" 
                         width="100" height="100" src="sample3.png"></li>
               </ul>
              </div>

              <div>
                <custom1></custom1>
              </div>
             `
})
class MyApp {
  onClick() {
    console.log("main.ts: you clicked me");
  } 
}

bootstrap(MyApp);

