System.register(['angular2/core', "angular2/router", './apihero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, apihero_service_1;
    var HeroDetailWithParamComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (apihero_service_1_1) {
                apihero_service_1 = apihero_service_1_1;
            }],
        execute: function() {
            HeroDetailWithParamComponent = (function () {
                function HeroDetailWithParamComponent(_heroService, _routeParams) {
                    this._heroService = _heroService;
                    this._routeParams = _routeParams;
                }
                HeroDetailWithParamComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = parseInt(this._routeParams.get('id'));
                    this._heroService.getHero(id, function (json) {
                        _this.hero = json.hero;
                    });
                    //this.hero = this._heroService.getHero(id).hero;
                };
                HeroDetailWithParamComponent.prototype.goBack = function () {
                    window.history.back();
                };
                HeroDetailWithParamComponent = __decorate([
                    core_1.Component({
                        //selector: 'herodetailswithparam',
                        //templateUrl: './html/herodetailswithparam.html',
                        templateUrl: 'partial/Herodetailswithparam'
                    }), 
                    __metadata('design:paramtypes', [apihero_service_1.ApiHeroService, router_1.RouteParams])
                ], HeroDetailWithParamComponent);
                return HeroDetailWithParamComponent;
            })();
            exports_1("HeroDetailWithParamComponent", HeroDetailWithParamComponent);
        }
    }
});
//# sourceMappingURL=herodetailswithparam.component.js.map