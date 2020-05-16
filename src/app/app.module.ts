import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAppointmentComponentComponent } from './list-appointment-component/list-appointment-component.component';
import { AppointmentComponentComponent } from './appointment-component/appointment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAppointmentComponentComponent,
    AppointmentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
