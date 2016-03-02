System.register(["angular2/core", "angular2/src/common/directives/core_directives", "../api.service", './herodetails.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, core_directives_1, api_service_1, herodetails_component_1;
    var HeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_directives_1_1) {
                core_directives_1 = core_directives_1_1;
            },
            function (api_service_1_1) {
                api_service_1 = api_service_1_1;
            },
            function (herodetails_component_1_1) {
                herodetails_component_1 = herodetails_component_1_1;
            }],
        execute: function() {
            HeroComponent = (function () {
                function HeroComponent(service) {
                    this.service = service;
                }
                HeroComponent.prototype.ngOnInit = function () {
                    this.getHeros();
                };
                HeroComponent.prototype.getHeros = function () {
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
                HeroComponent.prototype.onselect = function (hero) {
                    this.selectedhero = hero;
                    console.log(this.selectedhero.name);
                };
                HeroComponent = __decorate([
                    core_1.Component({
                        selector: "hero",
                        templateUrl: "partial/hero",
                        providers: [api_service_1.ApiService],
                        directives: [core_directives_1.CORE_DIRECTIVES, herodetails_component_1.HeroDetailsComponent],
                        styles: ["\n\t  .selected {\n\t\tbackground-color: #CFD8DC !important;\n\t\tcolor: green;\n\t  }\n\t  .heroes {\n\t\tmargin: 0 0 2em 0;\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\twidth: 10em;\n\t  }\n\t  .heroes li {\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tleft: 0;\n\t\tbackground-color: #EEE;\n\t\tmargin: .5em;\n\t\tpadding: .3em 0;\n\t\theight: 1.6em;\n\t\tborder-radius: 4px;\n\t  }\n\t  .heroes li.selected:hover {\n\t\tbackground-color: #BBD8DC !important;\n\t\tcolor: white;\n\t  }\n\t  .heroes li:hover {\n\t\tcolor: #607D8B;\n\t\tbackground-color: #DDD;\n\t\tleft: .1em;\n\t  }\n\t  .heroes .text {\n\t\tposition: relative;\n\t\ttop: -3px;\n\t  }\n\t  .heroes .badge {\n\t\tdisplay: inline-block;\n\t\tfont-size: small;\n\t\tcolor: white;\n\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\tbackground-color: #607D8B;\n\t\tline-height: 1em;\n\t\tposition: relative;\n\t\tleft: -1px;\n\t\ttop: -4px;\n\t\theight: 1.8em;\n\t\tmargin-right: .8em;\n\t\tborder-radius: 4px 0 0 4px;\n\t  }\n\t"]
                    }), 
                    __metadata('design:paramtypes', [api_service_1.ApiService])
                ], HeroComponent);
                return HeroComponent;
            })();
            exports_1("HeroComponent", HeroComponent);
        }
    }
});
//# sourceMappingURL=hero.component.js.map