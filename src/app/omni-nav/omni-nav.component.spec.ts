import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniNavComponent } from './omni-nav.component';

describe('OmniNavComponent', () => {
  let component: OmniNavComponent;
  let fixture: ComponentFixture<OmniNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
