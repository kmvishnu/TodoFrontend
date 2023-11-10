import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrEditDialogComponent } from '../popups/add-or-edit-dialog/add-or-edit-dialog.component';
import { TodoServiceService } from '../services/todo-service.service';
import { Todos } from '../today-list/today-list.component';

@Component({
  selector: 'app-today-home',
  templateUrl: './today-home.component.html',
  styleUrls: ['./today-home.component.css']
})
export class TodayHomeComponent implements OnInit {
  todoList!: Todos[];

  constructor(public dialog: MatDialog,public todoService : TodoServiceService){}
  ngOnInit(): void {
  }

  openPopup(){
    const dialogRef = this.dialog.open(AddOrEditDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.todoService.getTodoList().subscribe(result=>{
        this.todoService.updateTodoList(result.data);
      })

    });


  }

}
