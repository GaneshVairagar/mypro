import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
showalleventbooks() {
throw new Error('Method not implemented.');
}
  title = 'event-project_v2';

  userIdentity:any ="";

ngOnInit(): void {
  this.userIdentity=localStorage.getItem("userIdentity");
}


}
 