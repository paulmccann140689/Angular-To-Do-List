import { CommonModule} from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService } from '../notes.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
  ]
})
export class NotesComponent implements OnInit {

  @Input() index: number = 0;
  @Input() tasksLen: number = 0;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {

  }


  openNotesBox(): void {
    this.notesService.openNotesBox(this.index, this.tasksLen);
  }

}
