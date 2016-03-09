import "rxjs/Rx"
import {Http, Response, Headers, RequestOptions} from "angular2/http";
import {Observable} from 'rxjs/Observable';
import {Injectable} from "angular2/core";

import {Hero} from "./Hero";

@Injectable()
export class ApiHeroService {
	constructor(private http: Http) { }
	
	private handlerror(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}

	addHero(name: string): Observable<Hero>
	{
		var body = JSON.stringify({ name });
		//var body = name;
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post("api/hero", body, options)
			.map(res => <Hero>res.json().hero)
			.do(x=>console.log(x))
			.catch(this.handlerror);
	}

	getHerosJson() {
		var data =
			this.http.get("api/hero")
				.map(x=> <Hero[]>x.json().heros)
				.do(x=> console.log(x))
				.catch(this.handlerror);

		return data;
	}

	//HandlJson is the call back method to operate the data from web service, input param is json type, no return value
	get(HendleJson: (json: any) => void) {
        //this.http.get("api/hero").map(response => response.json()).subscribe(HendleJson);
		var result = this.http.get("api/hero").map(x=>x.json());
		//console.log(result);
		result.subscribe(HendleJson);
    }

	getHeroJson(id: number) {
		return this.http.get("api/hero/" + id)
			.map(x=> <Hero>x.json().hero)
			.do(x=>console.log(x=> x))
			.catch(this.handlerror);
	}

	getHero(id: number, HandleJson:(json:any)=>void) {
		var result = this.http.get("api/hero/" + id).map(x=> <Hero>x.json().data);
		result.subscribe(HandleJson);
	}
}