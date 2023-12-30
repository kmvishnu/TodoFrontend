import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.css']
})
export class MenuDialogComponent {
   name :any=''

  constructor(@Inject(MAT_DIALOG_DATA) public data: { username: string }, private authService : AuthService,
  public dialogRef: MatDialogRef<MenuDialogComponent>,
  ) {}

  ngOnInit() {
    
    this.name = this.authService.getName();
  }

  logout(){
     this.authService.logout();
    this.dialogRef.close();

  }
}
