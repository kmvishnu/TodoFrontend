import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TodayHomeComponent } from './today-home/today-home.component';
import { TodayListComponent } from './today-list/today-list.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { ActionDialogComponent } from './action-dialog/action-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { AddOrEditDialogComponent } from './popups/add-or-edit-dialog/add-or-edit-dialog.component';
import { ViewTodoComponent } from './popups/view-todo/view-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodayHomeComponent,
    TodayListComponent,
    ActionDialogComponent,
    AddOrEditDialogComponent,
    ViewTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule, 
    MatButtonModule,
     MatIconModule,
     MatCardModule,
     FormsModule,
     MatFormFieldModule, 
     MatInputModule,
     MatDividerModule,
     MatListModule,
     MatDialogModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
