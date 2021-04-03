import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
	selector: 'app-omni-nav',
	templateUrl: './omni-nav.component.html',
	styleUrls: ['./omni-nav.component.scss']
})
export class OmniNavComponent implements OnInit {
	opened: boolean = false;
	constructor(private notesService: NotesService) { }

	ngOnInit(): void {
	}

	open(): void {
		this.opened=!this.opened;
	}
	makeNote():void{
		console.log('inner make note')
		this.notesService.makeNote();
	}


}
