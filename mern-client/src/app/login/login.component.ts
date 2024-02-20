import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,FormsModule,ReactiveFormsModule,Validators,} from '@angular/forms';
import { CustomerInfo } from '../customer/CustomerInfo';
import { loginInfo } from './loginInfo';
import { CommonModule } from '@angular/common';
import { Router, RouterModule,NavigationExtras  } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { routes } from '../app.routes';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,ReactiveFormsModule,RouterModule,UserComponent,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  customer:any;
  base_url: string = "https://prestigeplanner.onrender.com/";
  // customerInfo: CustomerInfo[] = [];
  // error: string = "";
  // nm: string = "";
  // status: boolean = false;
  constructor(private http: HttpClient, private router:Router) {}

  myform:FormGroup=new FormGroup({
    email_id:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)

  });

  // getter method
 
  checkUser(){
    let em:any=this.myform.controls['email_id'].value;
    let pwd:any=this.myform.controls['password'].value;
   console.log(em+"------"+pwd)
        this.http.post<loginInfo>(this.base_url + "customer/getbyemailandpassword", { email_id: em, password: pwd }).subscribe(
         data=>{
          if(data==null){
            alert("Login FAILED!!!!"+data);
          }
          else{
              this.customer = data;
                alert("Login Successful!!!!"+data);
                localStorage.setItem("userIdentity",em);
                localStorage.setItem("user_name",this.customer.first_name+" "+this.customer.last_name);
                localStorage.setItem("user_address_line1",this.customer.address_line1);
                localStorage.setItem("user_address_line2",this.customer.address_line2);
                localStorage.setItem("phone_number",this.customer.phone_number);
                localStorage.setItem("city",this.customer.city)
                this.router.navigate(['/app-user'])
                        
                
          }

         },
         error=>{
           alert("Login Failed.........!!!!!!");
         }
       );
   }

   
   }