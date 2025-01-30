import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { ReservationService } from './reservation.service';

@NgModule({
  declarations: [
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //for inputs forms
    ReactiveFormsModule, //for form validations
    RouterModule, //for routing or anchors
    HomeModule
  ],
  providers:[
    ReservationService
  ]
})
export class ReservationModule { }
