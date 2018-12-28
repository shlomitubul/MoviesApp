import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from 'services/data.service';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
    
    
  ], 
  providers: [HttpClient,DataService],
  bootstrap: [AppComponent]
}) 
export class AppModule { } 
