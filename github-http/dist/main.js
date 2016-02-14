System.register(['angular2/platform/browser', 'angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var browser_1, core_1, core_2, http_1, http_2;
    var MyApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            MyApp = (function () {
                function MyApp(http) {
                    var _this = this;
                    this.http = http;
                    this.testOutput = "";
                    this.http.get('https://api.github.com/users/ocampesato')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { return _this.testOutput = data; }, function (err) { return console.log('foo'); }, function () { return console.log('Got response from API', _this.testOutput); });
                }
                MyApp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<button (click)=\"ajaxRequest()\">Make ajax</button>"
                    }),
                    __param(0, core_2.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MyApp);
                return MyApp;
            })();
            browser_1.bootstrap(MyApp, [http_2.HTTP_BINDINGS]);
        }
    }
});
//# sourceMappingURL=main.js.map