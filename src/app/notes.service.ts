import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from './note/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  iterator: number = 0;
	notes: Array<Note> = [];
  archivedNotes: Array<Note> = [];
  private syncDebouncer?: number;

  constructor() { }

  intializeNotes(): void {
    let items = localStorage.getItem('notes')
    if (items) {
      this.notes = JSON.parse(items);
    } else {
      this.notes = [
        { title: 'Eat pizza', id: ++this.iterator, complete: false },
        { title: 'Make app', id: ++this.iterator, complete: false },
        { title: 'Get good job', id: ++this.iterator, complete: false }
      ];
    }

  }
  makeNote(id?: number): void {
    if (id != undefined) {
      let index = this.notes.findIndex(item => item.id === id);
      if (index != -1){
        console.log('make note after',index)
        this.notes.splice(index + 1, 0, { title: '', id: ++this.iterator, complete: false });
      }
    } else
      this.notes.push({ title: '', id: ++this.iterator, complete: false });
  }
  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }
  deleteNote(note: Note) {
    let index = this.notes.findIndex((item: Note) => item.id === note.id);
    
    let out=this.notes.splice(index, 1);
    console.log('delete note',note.title,' found ', out[0].title)
    this.syncCheck();
  }
  swapNotes(original: number, target: number): void {
    let originalIndex = this.notes.findIndex((item: Note) => item.id === original);
    let targetIndex = this.notes.findIndex((item: Note) => item.id === target);
    let oldNote = this.notes[targetIndex];
    let newNote = this.notes[originalIndex];

    this.notes[targetIndex] = newNote
    this.notes[originalIndex] = oldNote
    this.syncCheck();

  }
  archiveNotes(): void {
    for (let i = 0; i < this.notes.length; i++) {
      let note: Note = this.notes[i]
      if (note.complete) {
        let outNote: Note = this.notes.splice(i, 1)[0];
        this.archivedNotes.push(outNote)
        i--;
      }
    }/*
    this.notes.forEach((note, i) => {
      if (note.complete) {
        let outNote: Note = this.notes.splice(i, 1)[0];
        this.archivedNotes.push(outNote)
      }
    })*/
    this.syncCheck();
  }
  unselectNotes(): void {
    let any=0;
    this.notes.forEach(note=>{
      if(note.complete){
        any++;
        note.complete=false;
      }
    });
    if(any>0)
      this.syncCheck();
  }


  syncCheck(): void {
    if (this.syncDebouncer)
      clearTimeout(this.syncDebouncer);

    this.syncDebouncer = window.setTimeout(() => {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }, 2000)
  }
}
