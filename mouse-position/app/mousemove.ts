import {Component} from 'angular2/core';

@Component({
 selector: 'mouse-move',
 template: `<svg id="svg" width="600px" height="400px"
              (mousemove)="mouseMove($event)">
            </svg>
           `
})
export class MouseMove{
   mouseMove(event) {
     console.log("Position x: "+event.clientX+" y: "+event.clientY); 
   } 
}

