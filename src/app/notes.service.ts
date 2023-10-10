import { Component, Injectable } from '@angular/core';
import { NotesInputComponent } from './notes-input/notes-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface DialogData {
  note: string;
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'notes.service',
  templateUrl: './notes.service.html',
  styles:[''],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    NotesInputComponent
  ],
})

export class NotesService {

  note: string = '';
  
  notesArray: string[] = [];

  constructor(public dialog: MatDialog) { }

  openNotesBox(index: number, tasksLen: number): void {
    let dialogRef = this.dialog.open(NotesInputComponent, {
      data:{note: this.notesArray[index]}
    });
    console.log(index);

    dialogRef.afterClosed().subscribe(result => {
      if (this.notesArray.length != tasksLen) {
        for (let i = 0; i < tasksLen - this.notesArray.length, i++;) {
          this.notesArray.push('');
        }
      }
      this.notesArray[index] = result;
    })




  }


}
