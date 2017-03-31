import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ServicesComponent } from './services/services.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EmailService } from  './email.service';

const routes:Routes = [
  {
    path: '',
     component: HomeComponent
   
  },
    {
        path: 'services',
       component:ServicesComponent
   
  },
  { 
    path: 'contact',
     component:  ContactsComponent
   
  },
  {
    path: 'works',
     component:  WorksComponent
   
  },
  {
    path: 'about',
     component: AboutComponent 
   
  }


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ServicesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot(routes)
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
