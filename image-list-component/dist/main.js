System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var MyApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyApp = (function () {
                function MyApp() {
                }
                MyApp.prototype.onClick = function () {
                    console.log("you clicked me");
                };
                MyApp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<div>\n               <ul>\n                <li><img (click)=\"onClick()\" width=\"100\" height=\"100\" src=\"sample1.png\"></li>\n                <li><img (click)=\"onClick()\" width=\"100\" height=\"100\" src=\"sample2.png\"></li>\n                <li><img (click)=\"onClick()\" width=\"100\" height=\"100\" src=\"sample3.png\"></li>\n               </ul>\n              </div>\n\n              <div>\n               <ul>\n                <li><custom1 (click)=\"onClick()\"></custom1></li> \n                <li><custom2 (click)=\"onClick()\"></custom2></li> \n                <li><custom3 (click)=\"onClick()\"></custom3></li> \n               </ul>\n              </div>\n             "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyApp);
                return MyApp;
            })();
            browser_1.bootstrap(MyApp);
        }
    }
});
//# sourceMappingURL=main.js.map