import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { HomeModule } from "../home/home.module";
import { EmployeeFormComponent } from '../employee-form/employee-form.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
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
