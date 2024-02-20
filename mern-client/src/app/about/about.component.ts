import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  corporateCount: number = 0;
  events: number = 0;
  sports: number = 0;
  projectcoutstop: any = setInterval(() => {
    this.corporateCount++;

    if (this.corporateCount == 200) {
      clearInterval(this.projectcoutstop);
    }

  }, 10)

  eventsStop: any = setInterval(() => {
    this.events++;

    if (this.events == 500) {
      clearInterval(this.eventsStop);
    }

  }, 10)

  sportsStop: any = setInterval(() => {
    this.sports++;

    if (this.sports == 300) {
      clearInterval(this.sportsStop);
    }

  }, 10)

}
