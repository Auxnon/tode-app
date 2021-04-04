import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Note } from './note.model';
import { NotesService } from '../notes.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
	@Input() note?: Note;
  @ViewChild('textSpan') textSpan?: ElementRef;


  private inputDebouncer?: number;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    //this.applyNote();
    //this.note={title:'test'};


  }
  ngAfterViewInit(): void {
    if (this.textSpan && this.textSpan.nativeElement) {
      let str = this.textSpan.nativeElement.innerText;
      console.log(str)
      if (str.length == 0)
        this.textSpan.nativeElement.focus();
    }
  }

  alter(content: EventTarget | null): void {
    /*
      if(this.note &&  this.note[field]){
      if(content)
      this.note[field]=content;
      }*/

    if (this.note && this.textSpan && this.textSpan.nativeElement) {
      if (this.inputDebouncer != undefined)
        clearTimeout(this.inputDebouncer)

      this.inputDebouncer = window.setTimeout(() => {
        if (this.textSpan && this.note) {
          let content = this.textSpan.nativeElement;
          if (content.innerText.length <= 0)
            this.notesService.deleteNote(this.note);
          else{
            let str=content.innerText
            
            this.note.title =str;
            this.notesService.syncCheck();
          }
        }
        this.inputDebouncer = undefined
      }, 400)

    }
  }
  dragBegin(event: DragEvent | null):void{
    if(event && event.dataTransfer && this.note)
      event.dataTransfer.setData("Text", ""+this.note.id);
  }
  pointerBegin(event: PointerEvent | null): void {
    /*if (element && element instanceof Element && element.parentElement)
      element.parentElement.setAttribute('draggable', 'true');*/
  }
  allowDrop(event: DragEvent | null):void{
     if(event)
       event.preventDefault()
  }
  dropOnto(event: DragEvent | null):void {
    if(event && event.dataTransfer){
      let targetId=parseInt(event.dataTransfer.getData("Text"));
      if(targetId && this.note)
      this.notesService.swapNotes(this.note.id,targetId)
    }
  }
  keyEnter(event: Event):void{
    this.notesService.makeNote(this.note?this.note.id:0);
     event.preventDefault();
  }
  complete(): void {
    if(this.note)
    this.note.complete = !this.note.complete;
  }


}
