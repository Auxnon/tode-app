import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesGridComponent } from './notes-grid.component';

describe('NotesGridComponent', () => {
  let component: NotesGridComponent;
  let fixture: ComponentFixture<NotesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
