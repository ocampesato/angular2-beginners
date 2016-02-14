import {bootstrap}      from 'angular2/platform/browser';
import {Component}      from 'angular2/core';
import {Inject}         from 'angular2/core';
import {Http}           from 'angular2/http';
import {HTTP_BINDINGS}  from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
   selector: 'my-app',
   template: `<button (click)="httpRequest()">User Info</button>`
})
class MyApp {
  githubData = "";

  constructor(@Inject(Http) public http:Http) { 
  }

  httpRequest() {  
    this.http.get('https://api.github.com/users/ocampesato')
      .map(res => res.json())
      .subscribe(
        data => this.githubData = data,
        err => console.log('error'),
        () => this.userInfo()
      );
  }

  userInfo() {  
     console.log("followers  = "+this.githubData.followers);
     console.log("following  = "+this.githubData.following);
     console.log("created_at = "+this.githubData.created_at);
  }
}

bootstrap(MyApp, [HTTP_BINDINGS]);

