import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrEditDialogComponent } from '../popups/add-or-edit-dialog/add-or-edit-dialog.component';
import { MenuDialogComponent } from '../popups/menu-dialog/menu-dialog.component';
import { AuthService } from '../services/auth.service';
import { TodoServiceService } from '../services/todo-service.service';
import { Todos } from '../today-list/today-list.component';

@Component({
  selector: 'app-today-home',
  templateUrl: './today-home.component.html',
  styleUrls: ['./today-home.component.css'],
})
export class TodayHomeComponent implements OnInit {
  todoList!: Todos[];

  constructor(
    public dialog: MatDialog,
    public todoService: TodoServiceService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {}

  openPopup() {
    const dialogRef = this.dialog.open(AddOrEditDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => {
        this.todoService.getTodoList().subscribe((updatedResult) => {
          this.todoService.updateTodoList(updatedResult);
        });
      }, 900);
    });
  }

  menu(event: MouseEvent): void {
    const dialogRef = this.dialog.open(MenuDialogComponent, {
      width: '100px',
      height:'80px',
      position: {
        top: `${event.clientY}px`, // Position the dialog above the menu button
        left: `${event.clientX}px`,
      },
    });

    // You can subscribe to the afterClosed event to handle actions after the dialog is closed
    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result if needed
    });
    // this.authService.logout();
  }
}
