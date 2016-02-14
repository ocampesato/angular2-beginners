import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {MyEllipse} from './my-svg';

@Component({
   selector: 'my-app',
   directives: [MyEllipse],
   template: `<div><my-svg></my-svg></div>`
})
class MyApp {}

bootstrap(MyApp);

