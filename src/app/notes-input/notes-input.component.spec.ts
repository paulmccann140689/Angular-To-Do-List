import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesInputComponent } from './notes-input.component';

describe('NotesInputComponent', () => {
  let component: NotesInputComponent;
  let fixture: ComponentFixture<NotesInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotesInputComponent]
    });
    fixture = TestBed.createComponent(NotesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
