import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PartnerInfo } from './PartnerInfo';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.css'
})

export class PartnerComponent {

  // url:string="http://localhost:5000";

  constructor(private http: HttpClient, private router: Router) {

    this.router.navigate(['../app-partner']);

  }

  save(partform: NgForm) {

    let newusr: any = partform.value;
    console.log(partform.value)

    console.log(partform.controls['company_emp_first_name'].value + " " + partform.controls['company_emp_last_name'].value + " " + partform.controls['company_name'].value + " " + partform.controls['email_id'].value + " " + partform.controls['phone_number'].value + " " + partform.controls['address'].value + " " + partform.controls['city'].value + " " + partform.controls['state'].value + " " + partform.controls['country'].value + " " + partform.controls['event_type'].value + " " + partform.controls['event_name'].value + " " + partform.controls['bank_acc_no'].value + " " + partform.controls['venue'].value + " " + partform.controls['img'].value + " " + partform.controls['descrip'].value + " " + partform.controls['price'].value + " " + partform.controls['date'].value + " " + partform.controls['time'].value)

    this.http.post<PartnerInfo>("https://prestigeplanner.onrender.com/upload-event", newusr).subscribe(
      data => {
        alert("Employee Registered Successfully" + newusr)
      },
      err => {
        alert("Employee Registered failed")
      }

    );

    
  }

}
