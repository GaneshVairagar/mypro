import { Component, OnInit } from '@angular/core';
import { eventInfo } from './eventsInfo';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  eventList: eventInfo[] = [];
    err: string = "";
    nm: string = "";
    status: boolean = false;
    constructor(private http: HttpClient) {
  
    }
  ngOnInit(): void {
    this.showalleventbooks();
    throw new Error('Method not implemented.');
  }
    showalleventbooks() {
      this.http.get<eventInfo[]>("https://prestigeplanner.onrender.com/all-events").subscribe(
        data => {
          this.status = true;
          console.log("got data!");
          this.eventList = data;
  
        },
  
        err => {
          this.status = false;
          console.log("Error Feacthing data!" + err);
          this.err = "DATA NAHI MILA !"
  
        }
      );
    }

}