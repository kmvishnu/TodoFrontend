import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoServiceService } from '../services/todo-service.service';
// import {FormsModule} from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
  styleUrls: ['./action-dialog.component.css'],
})
export class ActionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public todoService : TodoServiceService
  ) {}

  onViewClick(): void {
    
    this.dialogRef.close();
  }
  onEditClick(): void {
    
    this.dialogRef.close();
  }
  onDeleteClick(): void {
    
    this.todoService.deleteTodo(this.data.id).subscribe(
      response => {
        console.log('Delete successful', response);

      },
      error => {
        console.error('Delete failed', error);
      }
    );
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
