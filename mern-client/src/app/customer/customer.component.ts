import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CustomerInfo } from './CustomerInfo';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule,RouterModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
 
  customerList: CustomerInfo[] = [];
  err: string = "";
  nm: string = "";
  status: boolean = false;
  

  constructor(private http : HttpClient,private router:Router) 
  {
    this.router.navigate(['../app-customer']);
  }



  
  save(custform:NgForm)
  {
let newusr:any=custform.value; 
console.log(custform.value)
console.log(custform.controls['first_name'].value+ " "+custform.controls['last_name'].value+" "+custform.controls['email_id'].value +" "+custform.controls['phone_number'].value +" "+custform.controls['password'].value +" "+custform.controls['address_line1'].value +" "+custform.controls['address_line2'].value+" "+custform.controls['city'].value+" "+custform.controls['state'].value + " "+custform.controls['country'].value + " "+custform.controls['pin_code'].value)

    this.http.post<CustomerInfo>("https://prestigeplanner.onrender.com/upload-customer",newusr).subscribe(
      data=>{
        alert("Employee Registered Successfully"+newusr)
      },      
      err=>{
        alert("Employee Registered failed")
      }
       
    );
  }



    showallcustomers() {
      this.http.get<CustomerInfo[]>("https://prestigeplanner.onrender.com/all-customers").subscribe(
        data => {
          this.status = true;
          console.log("got data!");
          this.customerList = data;
  
        },
  
        err => {
          this.status = false;
          console.log("Error Feacthing data!" + err);
          this.err = "DATA NAHI MILA !"
  
        }
      );
    }

}
