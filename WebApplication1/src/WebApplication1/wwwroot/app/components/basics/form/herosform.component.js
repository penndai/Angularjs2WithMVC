System.register(["angular2/core", "./formhero"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, formhero_1;
    var HeroFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (formhero_1_1) {
                formhero_1 = formhero_1_1;
            }],
        execute: function() {
            HeroFormComponent = (function () {
                function HeroFormComponent() {
                    this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
                    this.model = new formhero_1.FormHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
                }
                HeroFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(HeroFormComponent.prototype, "diagnostic", {
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                HeroFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/components/basics/form/heroform.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroFormComponent);
                return HeroFormComponent;
            })();
            exports_1("HeroFormComponent", HeroFormComponent);
        }
    }
});
//# sourceMappingURL=herosform.component.js.map