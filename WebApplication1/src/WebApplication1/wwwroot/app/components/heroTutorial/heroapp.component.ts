import {Component, OnInit} from "angular2/core";
import {ApiHeroService} from "./apihero.service";
import {Router, RouteDefinition, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from "angular2/router";
import {HeroListComponent} from "./herolist.component";
import {HeroDashBoardComponent} from "./herodashboard.component";

@Component({
	selector: 'heroapp',
	template: `
	  <h1>{{title}}</h1>
	  <a [routerLink]="['HeroList']">Heroes</a>
	  <a [routerLink]="['DashBoard']">Dash Board</a>
	  <router-outlet></router-outlet>
	`,
	
	//template: `
	//	<h1>{{title}}</h1>
	//	<heroes></heroes>
	//`,
	directives: [ROUTER_DIRECTIVES,HeroListComponent, HeroDashBoardComponent],
	providers: [ApiHeroService, ROUTER_PROVIDERS]
})
export class HeroAppComponent implements OnInit {
	public heroroutes: RouteDefinition[] = null;
	title = "Heros Tour With Route";

	constructor(private router: Router) { }

	ngOnInit() {
		if (!this.heroroutes) {
			this.heroroutes = [
				{
					path: '/herolist',
					name: 'HeroList',
					component: HeroListComponent
				},
				{
					path:'/dashboard',
					name: 'DashBoard',
					component: HeroDashBoardComponent,
					useAsDefault:true
				}
			];

			this.router.config(this.heroroutes);
		}
	}		
}