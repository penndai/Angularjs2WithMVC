import {Component, OnInit} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/src/common/directives/core_directives";

@Component({
	selector: 'herodashboard',
	template: '<h3>My Dashboard</h3>',
	//templateUrl: 'partial/herodashboard',
	directives: [CORE_DIRECTIVES],
})

export class HeroDashBoardComponent implements OnInit {
	ngOnInit() {
		
	}
}