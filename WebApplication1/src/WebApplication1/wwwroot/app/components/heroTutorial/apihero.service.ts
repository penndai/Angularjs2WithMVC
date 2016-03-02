import "rxjs/Rx"
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class ApiHeroService {
	constructor(private http: Http) { }
	get(onNext: (json: any) => void) {
        this.http.get("api/hero").map(response => response.json()).subscribe(onNext);
    }
}