import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoServiceService } from 'src/app/services/todo-service.service';


@Component({
  selector: 'app-add-or-edit-dialog',
  templateUrl: './add-or-edit-dialog.component.html',
  styleUrls: ['./add-or-edit-dialog.component.css']
})
export class  AddOrEditDialogComponent implements OnInit{

  details!: String;
  todo!:String;
  edit:boolean=false;
  done!:boolean;;

  constructor(
    public dialogRef: MatDialogRef<AddOrEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public todoService : TodoServiceService
  ) {}
  ngOnInit(): void {
    if(this.data){
      this.todo=this.data.name
      this.details=this.data.details
      this.done=this.data.done
      this.edit=true;

    }
    
  }

  onViewClick(): void {
    
    this.dialogRef.close();
  }
  onEditClick(): void {
    
    this.todoService.editTodo({data:{name:this.todo,id:this.data.id,details:this.details,done:this.done}}).subscribe(
      response => {
        console.log('todo added Successfully', response);

      },
      error => {
        console.error('Failed to add Todo', error);
      }
    );
    
    this.dialogRef.close();
  }
  onAddClick(): void {
    this.todoService.addTodo({data:{name:this.todo,details:this.details,done:false}}).subscribe(
      response => {
        console.log('todo added Successfully', response);

      },
      error => {
        console.error('Failed to add Todo', error);
      }
    );
    this.dialogRef.close();
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
