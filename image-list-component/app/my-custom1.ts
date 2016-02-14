import {Component} from 'angular2/core';

@Component({
   selector: 'custom1',
   styleUrl: [` li { inline: block } `], 
   template: `
              <div>
               <ul>
                <li><img (click)="onClick(100)" 
                         width="100" height="100" src="sample1.png"></li>
                <li><img (click)="onClick(200)" 
                         width="100" height="100" src="sample2.png"></li>
                <li><img (click)="onClick(300)" 
                         width="100" height="100" src="sample3.png"></li>
               </ul>
              </div>
             ` 
})
export class Custom1 {
  onClick(id) {
    console.log("my-custom1.ts clicked: "+id));
  } 
}

