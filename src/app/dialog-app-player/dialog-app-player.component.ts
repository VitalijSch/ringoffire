import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-app-player',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './dialog-app-player.component.html',
  styleUrl: './dialog-app-player.component.scss'
})
export class DialogAppPlayerComponent {
  name: string = '';


  constructor(public dialogRef: MatDialogRef<DialogAppPlayerComponent>) {

  }


  onNoClick() {
    this.dialogRef.close();
  }
}
