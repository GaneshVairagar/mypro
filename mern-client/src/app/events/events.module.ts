import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({

  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,BrowserModule,HttpClientModule
  ],
  providers:[],
  
})
export class eventModule { }
