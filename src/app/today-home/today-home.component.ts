import { Component } from '@angular/core';

@Component({
  selector: 'app-today-home',
  templateUrl: './today-home.component.html',
  styleUrls: ['./today-home.component.css']
})
export class TodayHomeComponent {
  openPopup(){
    window.alert("yeahhh")
  }
}
