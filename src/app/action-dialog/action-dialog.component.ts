import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddOrEditDialogComponent } from '../popups/add-or-edit-dialog/add-or-edit-dialog.component';
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
    public todoService : TodoServiceService,
    public dialog: MatDialog
  ) {}

  onViewClick(): void {
    
    this.dialogRef.close();
  }
  onEditClick(): void {
    
    const editDialogRef = this.dialog.open(AddOrEditDialogComponent, {
      data:this.data
    });

    editDialogRef.afterClosed().subscribe(result => {
      this.todoService.getTodoList().subscribe(result=>{
        this.todoService.updateTodoList(result.data);
      })

    });

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

  onDoneClick():void{
    this.todoService.editTodo({data:{name:this.data.name,id:this.data.id,details:this.data.details,done:!this.data.done}}).subscribe(
      response => {
        console.log('Condition Changed Successfully', response);

      },
      error => {
        console.error('Failed to update Todo', error);
      }
    );
    this.dialogRef.close();
  }
}
