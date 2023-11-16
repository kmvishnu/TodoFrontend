import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {NgFor, DatePipe} from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActionDialogComponent } from '../action-dialog/action-dialog.component';
import { TodoServiceService } from '../services/todo-service.service';
import { Observable } from 'rxjs';
export interface Section {
  name: string;
  updated: Date;
}

export interface Todos {
  id: number,
  name: String,
  details:String,
  done:boolean
}
@Component({
  selector: 'app-today-list',
  templateUrl: './today-list.component.html',
  styleUrls: ['./today-list.component.css']
})


export class TodayListComponent implements OnInit{
  name: string | undefined;
  todoList!: Todos[];


  constructor(public dialog: MatDialog, public todoService : TodoServiceService) {}
  ngOnInit(): void {

    Promise.all([
      this.fetchAllTodos()
     
    ]).then((res) => {
     console.log(res);
     
    });


    this.todoService.todoList$.subscribe((todoList) => {
      this.todoList = todoList;
    });

    

  }
  fetchAllTodos() {
    return new Promise((resolve, reject) => {
      this.todoService.getTodoList().subscribe(
        (result) => {
         this.todoList=result.data;         
          resolve(true);
        },
        (error) => {
          console.log('fetchRequests error', error);
          resolve(false);
        }
      );
    });
  }
  openPopup(todo:Todos){
    const dialogRef = this.dialog.open(ActionDialogComponent, {
      data: todo
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fetchAllTodos()
    });
  }

  // openStatusBar(text: string): MatDialogRef<StatusbarPopupComponent> {
  //   const dialogRef = this.dialog.open(StatusbarPopupComponent);
  //   dialogRef.componentInstance.text = text;
  //   return dialogRef;
  // }
}
