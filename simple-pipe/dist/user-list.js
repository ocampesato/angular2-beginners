System.register(['angular2/core', './user-component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_component_1;
    var UserList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            }],
        execute: function() {
            UserList = (function () {
                function UserList() {
                }
                UserList.prototype.getUserList = function () {
                    this.userList = [
                        new user_component_1.User('a1', 'a2'),
                        new user_component_1.User('b1', 'b2'),
                        new user_component_1.User('c1', 'c2'),
                    ];
                    return this.userList;
                };
                UserList = __decorate([
                    core_1.Component({
                        selector: 'my-user'
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserList);
                return UserList;
            })();
            exports_1("UserList", UserList);
        }
    }
});
//# sourceMappingURL=user-list.js.map