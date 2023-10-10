import { Component, Inject, OnInit } from '@angular/core';
import { DialogData, NotesService } from '../notes.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

let note: any = ""

@Component({
  selector: 'app-notes-input',
  templateUrl: './notes-input.component.html',
  styles: [''],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    NotesService
  ]
})
export class NotesInputComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NotesInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit(): void{
      
    }

}
