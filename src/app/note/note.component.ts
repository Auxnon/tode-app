import { Component, OnInit, Input } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
	@Input() note?: Note;
  constructor() { }
  
  ngOnInit(): void {
  	//this.applyNote();
  	//this.note={title:'test'};
  }

  applyNote(): void{

  }

}
