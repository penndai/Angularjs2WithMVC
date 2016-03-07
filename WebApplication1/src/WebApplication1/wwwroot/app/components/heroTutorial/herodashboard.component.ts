import {Component, OnInit} from "angular2/core";
import {Router} from 'angular2/router';
import {CORE_DIRECTIVES} from "angular2/src/common/directives/core_directives";
import {Hero} from './hero';
import {ApiHeroService} from './apihero.service'

@Component({
	//selector: 'herodashboard',
	
	//templateUrl: 'partial/DashBoard',
	templateUrl:'app/components/heroTutorial/html/dashboard.html',
	styleUrls: ['app/components/heroTutorial/css/dashboard.component.css'],
	directives: [CORE_DIRECTIVES],
})

export class HeroDashBoardComponent implements OnInit {
	constructor(private service: ApiHeroService, private _router: Router) { }
	ngOnInit() {
		this.getDashBoardHeros();
	}

	public heros: Hero[];
	public selectedhero: Hero;

	gotoDetail(hero: Hero) {
		let link = ['DashBoardHeroDetail', { id: hero.id }];
		this._router.navigate(link);
	}

	getDashBoardHeros() {
		this.service.get(json=> {
			if (json) {
				if (!this.heros) {
					this.heros = [];
				}
				
				this.heros = json.heros;
				console.log(this.heros);
			}
		});
	}
}