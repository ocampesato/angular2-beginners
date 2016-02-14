import {bootstrap} from 'angular2/platform/browser'; 
import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  inputs: ['fname', 'lname'],
  template: `
     <div class="container" [ngSwitch]="myVar">
       <div *ngSwitchWhen="'A'">Var is A</div>
       <div *ngSwitchWhen="'B'">Var is B</div>
       <div *ngSwitchWhen="'C'">Var is C</div>
       <div *ngSwitchDefault>Var is something else</div>
     </div>

     <div style="margin-top: 20px;">
       <button class="ui primary button" (click)="nextChoice()">
          Next choice
       </button>
     </div>

     <div [ngStyle]="{color: 'white', 'background-color': 'blue'}"> Uses fixed white text on blue background
     </div>

     <div class="ui input">
       <input type="text" name="color" value="{{color}}" #colorinput>
     </div>

     <div class="ui input">
       <input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
     </div>

     <div>
       <span [ngStyle]="{color: 'red'}" [style.font-size.px]="fontSize">
          red text
       </span>
     </div>

     <div class="base" [ngClass]="classList">
        This is {{ classList.indexOf('blue') > -1 ? "" : "NOT" }} blue and {{ classList.indexOf('round') > -1 ? "" : "NOT" }} round
     </div>

     <div class="container">
       <div *ngIf="myVar == 'A'">Var is A</div>
       <div *ngIf="myVar == 'B'">Var is B</div>
       <div *ngIf="myVar == 'C'">Var is C</div>
       <div *ngIf="myVar != 'A' && myVar != 'B' && myVar != 'C'">Var is something else</div>
     </div>

     <div class="container" [ngSwitch]="myVar">
       <div *ngSwitchWhen="'A'">Var is A</div>
       <div *ngSwitchWhen="'B'">Var is B</div>
       <div *ngSwitchDefault>Var is something else</div>
     </div>

     <table class="ui celled table"> 
       <thead>
         <tr> <th>First Name</th> <th>Last Name</th> </tr>
       </thead>
       <tr *ngFor="#f of friends">
         <td>{{ f.fname }}</td> <td>{{ f.lname}}</td> 
       </tr>
     </table>
   ` 
}) 
class MyApp {
  fontSize:number = 16;
  color:string = "red";

  nextChoice() {
     console.log("does nothing");
  }

  constructor() {
     this.classList = ['blue', 'round'];
     this.friends = [
                      {fname:"John", lname:"Smith"}, 
                      {fname:"Dave", lname:"Stone"}, 
                    ];
  }
}

bootstrap(MyApp);

