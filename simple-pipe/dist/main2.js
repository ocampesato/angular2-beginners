System.register(['angular2/platform/browser', 'angular2/core'], function(exports_1) {
    "use strict";
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
    var FormApp;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FormApp = (function () {
                function FormApp() {
                }
                FormApp.prototype.addArticle = function (title, link) {
                    console.log("title: " + title.value + " link: " + link.value);
                };
                FormApp = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <form class=\"ui large form segment\">\n      <h3 class=\"ui header\">Add a Link</h3>\n      <div class=\"field\">\n        <label for=\"title\">Title:</label> <input name=\"title\">\n      </div>\n\n      <div class=\"field\">\n        <label for=\"link\">Link:</label>\n        <input name=\"link\">\n      </div>\n\n      <button (click)=\"addArticle(newtitle, newlink)\"\n              class=\"ui positive right floated button\">\n        Submit link\n      </button>\n    </form> \n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormApp);
                return FormApp;
            }());
            browser_1.bootstrap(FormApp);
        }
    }
});
//# sourceMappingURL=main2.js.map