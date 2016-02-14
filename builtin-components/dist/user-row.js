System.register(['angular2/core', './user-image', './user-component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_image_1, user_component_1;
    var UserRow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_image_1_1) {
                user_image_1 = user_image_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            }],
        execute: function() {
            UserRow = (function () {
                function UserRow() {
                }
                UserRow = __decorate([
                    core_1.Component({
                        selector: 'user-row',
                        inputs: ['user'],
                        host: { 'class': 'item' },
                        directives: [user_component_1.User, user_image_1.UserImage],
                        template: "\n     <user-image [user]=\"user\"></user-image> <div class=\"content\">\n     <div class=\"header\">{{ user.name }}</div> <div class=\"meta\">\n     <div class=\"user-sku\">SKU #{{ user.sku }}</div> </div>\n     <div class=\"description\">\n     <user-department [user]=\"user\"></user-department>\n        </div>\n       </div>\n     <price-display [price]=\"user.price\"></price-display>\n   "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserRow);
                return UserRow;
            })();
        }
    }
});
//# sourceMappingURL=user-row.js.map