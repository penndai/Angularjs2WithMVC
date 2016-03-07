import "rxjs/Rx"
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class ApiHeroService {
	constructor(private http: Http) { }

	//HandlJson is the call back method to operate the data from web service, input param is json type, no return value
	get(HendleJson: (json: any) => void) {
        //this.http.get("api/hero").map(response => response.json()).subscribe(HendleJson);
		var result = this.http.get("api/hero").map(x=>x.json());
		//console.log(result);
		result.subscribe(HendleJson);
    }

	getHero(id: number, HandleJson:(json:any)=>void) {
		var result = this.http.get("api/hero/" + id).map(x=> x.json());
		result.subscribe(HandleJson);
	}
}