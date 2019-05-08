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
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.http.get(this.dbUrl).subscribe((_events: Event[])=>{
      console.log(_events);
      this.events = _events
    })
  }
}
