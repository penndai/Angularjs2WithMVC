System.register(["angular2/core", "./apihero.service", "angular2/router", "./herolist.component", "./herodashboard.component", './herodetailswithparam.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, apihero_service_1, router_1, herolist_component_1, herodashboard_component_1, herodetailswithparam_component_1;
    var HeroAppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (apihero_service_1_1) {
                apihero_service_1 = apihero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (herolist_component_1_1) {
                herolist_component_1 = herolist_component_1_1;
            },
            function (herodashboard_component_1_1) {
                herodashboard_component_1 = herodashboard_component_1_1;
            },
            function (herodetailswithparam_component_1_1) {
                herodetailswithparam_component_1 = herodetailswithparam_component_1_1;
            }],
        execute: function() {
            HeroAppComponent = (function () {
                function HeroAppComponent(router) {
                    this.router = router;
                    this.heroroutes = null;
                    this.title = "Heros Tour With Route";
                }
                HeroAppComponent.prototype.ngOnInit = function () {
                    if (!this.heroroutes) {
                        this.heroroutes = [
                            {
                                path: '/herolist',
                                name: 'HeroList',
                                component: herolist_component_1.HeroListComponent,
                                useAsDefault: true
                            },
                            {
                                path: '/dashboard',
                                name: 'DashBoard',
                                component: herodashboard_component_1.HeroDashBoardComponent,
                                useAsDefault: false
                            },
                            {
                                path: '/herodetail/:id',
                                name: 'DashBoardHeroDetail',
                                component: herodetailswithparam_component_1.HeroDetailWithParamComponent
                            }
                        ];
                        this.router.config(this.heroroutes);
                    }
                };
                HeroAppComponent = __decorate([
                    core_1.Component({
                        selector: 'heroapp',
                        template: "\n\t  <h1>{{title}}</h1>\n\t  <a [routerLink]=\"['HeroList']\">Heroes</a>\n\t  <a [routerLink]=\"['DashBoard']\">Dash Board</a>\n\t  <router-outlet></router-outlet>\n\t",
                        //template: `
                        //	<h1>{{title}}</h1>
                        //	<heroes></heroes>
                        //`,
                        directives: [router_1.ROUTER_DIRECTIVES, herolist_component_1.HeroListComponent, herodashboard_component_1.HeroDashBoardComponent],
                        providers: [apihero_service_1.ApiHeroService, router_1.ROUTER_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], HeroAppComponent);
                return HeroAppComponent;
            })();
            exports_1("HeroAppComponent", HeroAppComponent);
        }
    }
});
//# sourceMappingURL=heroapp.component.js.map