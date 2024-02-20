import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { TermsComponent } from './terms/terms.component';
import { PartnerComponent } from './partner/partner.component';
import { UserComponent } from './user/user.component';
import { EventsComponent } from './events/events.component';
import { MoreComponent } from './more/more.component';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { PdoneComponent } from './pdone/pdone.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},

    {path:'app-about',component:AboutComponent},
    {path:'app-contactus',component:ContactusComponent},
    {path:'app-portfolios',component:PortfoliosComponent},
    {path:'app-login',component:LoginComponent},
    {path:'app-customer',component:CustomerComponent},
    {path:'app-terms',component:TermsComponent},
    {path:'app-partner',component:PartnerComponent},
    {path:'app-user',component:UserComponent},
    {path:'app-events',component:EventsComponent},
    {path:'app-more',component:MoreComponent},
    {path:'app-logout',component:LogoutComponent},
    {path:'app-ghar',component:AppComponent},
    {path:'app-payment',component:PaymentComponent},
    {path:'app-pdone',component:PdoneComponent}
];
