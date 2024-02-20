import { userInfo } from './userInfo';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import { userModule } from './user.module';
import { Component,Input ,OnInit } from '@angular/core';
@Component({

  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  userId:any=''
  customer:any=''
  address_line1:any=''
  address_line2:any=''
  phone_number:any=''
  city:any=''
  constructor(private router:Router
    ) { }

  ngOnInit() {
    this.userId= localStorage.getItem("userIdentity");
    this.customer= localStorage.getItem("user_name");
    this.address_line1= localStorage.getItem("user_address_line1");
    this.address_line2= localStorage.getItem("user_address_line2");
    this.phone_number= localStorage.getItem("phone_number");
    this.city=localStorage.getItem("city");
   
  }
}