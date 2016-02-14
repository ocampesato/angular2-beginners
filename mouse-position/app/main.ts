import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {MouseMove} from './mousemove';

@Component({
   selector: 'my-app',
   directives: [MouseMove],
   template: `<div><mouse-move></mouse-move></div>`
})
class MyApp {}

bootstrap(MyApp);

