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
                MyApp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        inputs: ['fname', 'lname'],
                        template: "\n     <div class=\"container\" [ngSwitch]=\"myVar\">\n       <div *ngSwitchWhen=\"'A'\">Var is A</div>\n       <div *ngSwitchWhen=\"'B'\">Var is B</div>\n       <div *ngSwitchWhen=\"'C'\">Var is C</div>\n       <div *ngSwitchDefault>Var is something else</div>\n     </div\n\n     <div style=\"margin-top: 20px;\">\n       <button class=\"ui primary button\" (click)=\"nextChoice()\">\n          Next choice\n       </button>\n     </div>\n\n     <div class=\"container\">\n       <div *ngIf=\"myVar == 'A'\">Var is A</div>\n       <div *ngIf=\"myVar == 'B'\">Var is B</div>\n       <div *ngIf=\"myVar == 'C'\">Var is C</div>\n       <div *ngIf=\"myVar != 'A' && myVar != 'B' && myVar != 'C'\">Var is something else</div>\n     </div>\n\n     div class=\"container\" [ngSwitch]=\"myVar\">\n       <div *ngSwitchWhen=\"'A'\">Var is A</div>\n       <div *ngSwitchWhen=\"'B'\">Var is B</div>\n       <div *ngSwitchDefault>Var is something else</div>\n     </div>\n\n     <div class=\"container\" [ngSwitch]=\"myVar\">\n       <div *ngSwitchWhen=\"'A'\">Var is A</div>\n       <div *ngSwitchWhen=\"'B'\">Var is B</div>\n       <div *ngSwitchWhen=\"'C'\">Var is C</div>\n       <div *ngSwitchDefault>Var is something else</div>\n     </div\n   "
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