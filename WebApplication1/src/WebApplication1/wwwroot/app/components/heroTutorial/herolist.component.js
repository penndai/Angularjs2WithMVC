System.register(["angular2/core", 'angular2/router', "angular2/src/common/directives/core_directives", "./apihero.service", './herodetails.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, core_directives_1, apihero_service_1, herodetails_component_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_directives_1_1) {
                core_directives_1 = core_directives_1_1;
            },
            function (apihero_service_1_1) {
                apihero_service_1 = apihero_service_1_1;
            },
            function (herodetails_component_1_1) {
                herodetails_component_1 = herodetails_component_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(service, router) {
                    this.service = service;
                    this.router = router;
                }
                HeroListComponent.prototype.ngOnInit = function () {
                    this.getHerosJson();
                };
                HeroListComponent.prototype.getHerosJson = function () {
                    var _this = this;
                    this.service.getHerosJson().subscribe(function (x) { return _this.heros = x; }, function (error) { return console.log(error); });
                };
                HeroListComponent.prototype.getHeros = function () {
                    var _this = this;
                    this.service.get(function (json) {
                        if (json) {
                            if (!_this.heros) {
                                _this.heros = [];
                            }
                            _this.heros = json.heros;
                        }
                    });
                };
                HeroListComponent.prototype.gotoDetail = function () {
                    var link = ['DashBoardHeroDetail', { id: this.selectedhero.id }];
                    this.router.navigate(link);
                };
                HeroListComponent.prototype.getStaticHeros = function () {
                    this.heros =
                        [
                            { "id": 11, "name": "Mr. Nice" },
                            { "id": 12, "name": "Narco" },
                            { "id": 13, "name": "Bombasto" },
                            { "id": 14, "name": "Celeritas" },
                            { "id": 15, "name": "Magneta" },
                            { "id": 16, "name": "RubberMan" },
                            { "id": 17, "name": "Dynama" },
                            { "id": 18, "name": "Dr IQ" },
                            { "id": 19, "name": "Magma" },
                            { "id": 20, "name": "Tornado" }
                        ];
                };
                HeroListComponent.prototype.onselect = function (hero) {
                    this.selectedhero = hero;
                    //console.log(this.selectedhero.name);
                };
                HeroListComponent = __decorate([
                    core_1.Component({
                        selector: "heroes",
                        templateUrl: "partial/hero",
                        styleUrls: ['app/components/heroTutorial/css/heroapp.component.css'],
                        //providers: [ApiHeroService],
                        directives: [core_directives_1.CORE_DIRECTIVES, herodetails_component_1.HeroDetailsComponent],
                    }), 
                    __metadata('design:paramtypes', [apihero_service_1.ApiHeroService, router_1.Router])
                ], HeroListComponent);
                return HeroListComponent;
            })();
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
//# sourceMappingURL=herolist.component.js.map