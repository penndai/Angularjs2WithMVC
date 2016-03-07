System.register(["angular2/core", 'angular2/router', "angular2/src/common/directives/core_directives", './apihero.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, core_directives_1, apihero_service_1;
    var HeroDashBoardComponent;
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
            }],
        execute: function() {
            HeroDashBoardComponent = (function () {
                function HeroDashBoardComponent(service, _router) {
                    this.service = service;
                    this._router = _router;
                }
                HeroDashBoardComponent.prototype.ngOnInit = function () {
                    this.getDashBoardHeros();
                };
                HeroDashBoardComponent.prototype.gotoDetail = function (hero) {
                    var link = ['DashBoardHeroDetail', { id: hero.id }];
                    this._router.navigate(link);
                };
                HeroDashBoardComponent.prototype.getDashBoardHeros = function () {
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
                HeroDashBoardComponent = __decorate([
                    core_1.Component({
                        //selector: 'herodashboard',
                        templateUrl: 'partial/DashBoard',
                        directives: [core_directives_1.CORE_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [apihero_service_1.ApiHeroService, router_1.Router])
                ], HeroDashBoardComponent);
                return HeroDashBoardComponent;
            })();
            exports_1("HeroDashBoardComponent", HeroDashBoardComponent);
        }
    }
});
//# sourceMappingURL=herodashboard.component.js.map