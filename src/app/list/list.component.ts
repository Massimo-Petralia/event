import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dbUrl = 'http://localhost:3000/events';
  events: Event[];
  eventSelected: Event

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.http.get(this.dbUrl).subscribe((_events: Event[])=>{
      this.events = _events
    })
  }
  selectedEvent(event: Event){
    this.eventSelected = event;
    console.log(this.eventSelected);
  }
}
