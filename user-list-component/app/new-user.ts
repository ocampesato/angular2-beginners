import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
   selector: 'new-user',
   template: '',
})
export class User {
   fname:string;

   constructor(fname:string) {
      this.fname = fname;
   } 
}

//bootstrap(User);

