import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { HomeModule } from "../home/home.module";


@NgModule({
  declarations: [
    EmployeeListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeModule
],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
