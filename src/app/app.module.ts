import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { apiService } from './services/api.service';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactviewComponent } from './contactview/contactview.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { HomeComponent } from './home/home.component';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { ContactitemComponent } from './contactlist/contactitem/contactitem.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactformComponent,
    ContactlistComponent,
    ContactviewComponent,
    FourZeroFourComponent,
    HomeComponent,
    ContacteditComponent,
    ContactitemComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
