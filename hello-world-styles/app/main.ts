import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
   selector: 'my-app',
 //styles:   [`p { font-size: 36px; color: red; }`],
   styleUrls: ['app/styles.css'],
   template: `<div><p>Hello from Angular 2</p></div>`
})
class MyApp {}

bootstrap(MyApp);


