import { Component, OnInit } from '@angular/core';
import { Note } from '../note/note.model';
import { NotesService } from '../notes.service';


@Component({
	selector: 'app-notes-grid',
	templateUrl: './notes-grid.component.html',
	styleUrls: ['./notes-grid.component.scss']
})
export class NotesGridComponent implements OnInit {

	notes: Array<Note> = [];
	constructor(private notesService:NotesService) { }

	ngOnInit(): void {
		
		this.notesService.makeTestNotes();
		this.notesService.getNotes().subscribe(notes=>{
			this.notes=notes;
		})

	}

}
