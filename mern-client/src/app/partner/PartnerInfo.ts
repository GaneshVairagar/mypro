export class PartnerInfo{
    id :string
	company_emp_first_name :string 
	company_emp_last_name :string 
	company_name :string 
	email_id :string 
	phone_number :string 
	address :string 
	city :string 
	state :string 
	country :string 
	event_type :string 
	event_name :string 
	bank_acc_no :string 
	venue :string 
	img :string 
	descrip :string 
	price :string 
	date :string 
	time :string 

    constructor(id :string,first_name :string,last_name :string,cm :string,eid :string,ph :string,add :string ,ci :string,st :string,co :string ,etype :string ,ename :string,accno :string ,vn :string ,im :string ,des :string ,pri :string ,dat :string,tim :string){
    
        this.id=id;
		this.company_emp_first_name = first_name;
		this.company_emp_last_name = last_name
		this.company_name = cm
		this.email_id = eid
		this.phone_number =ph 
		this.address = add
		this.city =ci
		this.state = st
		this.country = co
		this.event_type = etype 
		this.event_name = ename
		this.bank_acc_no = accno
		this.venue = vn
		this.img = im
		this.descrip = des
		this.price = pri
		this.date = dat
		this.time = tim
    

    }
}