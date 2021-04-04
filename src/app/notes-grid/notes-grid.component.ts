import { Component, OnInit } from '@angular/core';
import { Note } from '../note/note.model';
import { NotesService } from '../notes.service';
import { itemStateTransition } from '../item-state.transition';

@Component({
	selector: 'app-notes-grid',
	templateUrl: './notes-grid.component.html',
	styleUrls: ['./notes-grid.component.scss'],
	animations: [
		itemStateTransition
	]
})
export class NotesGridComponent implements OnInit {

	notes: Array<Note> = [];
	archivedNotes: Array<Note> = [];

	constructor(private notesService: NotesService) { }

	ngOnInit(): void {
		this.notesService.intializeNotes();
		this.notesService.getNotes().subscribe((notes) => {
			this.notes = notes;
		})
	}

}
