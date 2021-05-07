import { Component, HostListener } from '@angular/core';
import { NotesService } from './notes.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Todooey App';
	constructor(private notesService: NotesService) { }


	@HostListener('window:keydown', ['$event'])
	keyDown(event: KeyboardEvent) {
		switch (event.code) {
			case "Backspace":
			case "Delete": this.notesService.archiveNotes();break;
			case "Escape": this.notesService.unselectNotes();break;
		}
		
	}
}

