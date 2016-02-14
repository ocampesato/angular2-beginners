System.register(['angular2/platform/browser', 'angular2/core', './my-pipe', './user-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, my_pipe_1, user_service_1;
    var MyApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_pipe_1_1) {
                my_pipe_1 = my_pipe_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            MyApp = (function () {
                function MyApp(userService) {
                    this.userList = userService.getUserList();
                }
                MyApp.prototype.mouseEvent = function (user) {
                    console.log("current user: " + user.fname + " " + user.lname);
                    this.currentUser = user;
                };
                MyApp.prototype.isSelected = function (user) {
                    if (!user || !this.currentUser) {
                        return false;
                    }
                    return user.lname === this.currentUser.lname;
                };
                MyApp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        pipes: [my_pipe_1.MyPipe],
                        template: "\n             <div class=\"ui items\">\n               <user-item \n                *ngFor=\"#user of userList|myfilter\"\n                  [user]=\"user\"\n                  (mouseover)='mouseEvent(user)'\n                  [class.chosen]=\"isSelected(user)\"> \n                  {{user.fname}}-{{user.lname}}<br/> \n               </user-item> \n               <user-image> \n               </user-image> \n             </div> \n            "
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], MyApp);
                return MyApp;
            })();
            browser_1.bootstrap(MyApp, [user_service_1.UserService]);
        }
    }
});
//# sourceMappingURL=main.js.map