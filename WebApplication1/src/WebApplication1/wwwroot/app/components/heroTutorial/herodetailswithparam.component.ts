import {Component, OnInit} from 'angular2/core';
import {RouteParams} from "angular2/router";
import {ApiHeroService} from './apihero.service';
import {Hero} from './Hero';

@Component({
	//selector: 'herodetailswithparam',
	templateUrl: 'app/components/heroTutorial/html/herodetailswithparam.html',
	//templateUrl: 'partial/Herodetailswithparam',
	styleUrls: ['app/components/heroTutorial/css/herodetails.component.css']
})

export class HeroDetailWithParamComponent implements OnInit{
	constructor(private _heroService: ApiHeroService, private _routeParams: RouteParams) { }

	hero: Hero;

	ngOnInit() {
		var id = parseInt(this._routeParams.get('id'));
		
		// pass in the callback method as parameter
		//this._heroService.getHero(id, json=> {			
		//	this.hero = json.hero;			
		//});

		// invoke subscribe method of observable object to set the hero object
		this._heroService.getHeroJson(id).subscribe(x=> this.hero = x, error=> console.log(error));
	}

	goBack() {
		window.history.back();
	}
}