import { Component } from '@angular/core';
import {NgFor, DatePipe} from '@angular/common';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-today-list',
  templateUrl: './today-list.component.html',
  styleUrls: ['./today-list.component.css']
})

export class TodayListComponent {

  

  openPopup(){
    window.alert("workingg")
  }
  notes: Section[] = [
    {
      name: 'Vacation Itinerary ',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}
