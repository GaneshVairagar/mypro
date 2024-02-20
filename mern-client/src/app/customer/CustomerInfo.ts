export class CustomerInfo{
  first_name: string 
  last_name: string 
  email_id: string 
  phone_number: string 
  password: string 
  address_line1: string 
  address_line2: string 
  city: string 
  state: string 
  country: string 
  pin_code: number

  constructor(fnm:string,lnm:string,em:string,mb:string,pass:string,add1:string,add2:string,cty:string,st:string,ctry:string,pc:number){
    this.first_name=fnm;
    this.last_name=lnm;
    this.email_id=em;
    this.phone_number=mb;
    this.password=pass;
    this.address_line1=add1;
    this.address_line2=add2;
    this.city=cty;
    this.state=st;
    this.country=ctry;
    this. pin_code=pc;
  }
  
}