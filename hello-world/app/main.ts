import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
   selector: 'my-app',
   template: `<div>Hello from Angular 2</div>`
})
class MyApp {}

bootstrap(MyApp);


