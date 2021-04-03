import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from './note/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
	notes: Array<Note>=[];
  constructor() { }

  makeTestNotes():void{
	this.notes = [
			{ title: 'Eat pizza' },
			{ title: 'Make app' },
			{ title: 'Get good job' }
		];
  }
  makeNote():void{
  	this.notes.push({title:''});
    console.log('make note ',this.notes.length)
  }
  getNotes():Observable<Note[]>{
  	return of(this.notes);
  }
}
