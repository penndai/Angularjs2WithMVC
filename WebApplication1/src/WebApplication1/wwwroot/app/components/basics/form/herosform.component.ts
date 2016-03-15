import {Component, OnInit} from "angular2/core";
import {NgForm} from "angular2/common";
import {FormHero} from "./formhero";

@Component({
	templateUrl: "app/components/basics/form/heroform.component.html"
})

export class HeroFormComponent {
	powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
	model = new FormHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
	submitted = false;
	onSubmit() { this.submitted = true; }

	get diagnostic() { return JSON.stringify(this.model); }
}