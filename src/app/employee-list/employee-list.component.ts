import { Component } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  constructor(private employeeService: EmployeeService) {}

  getEmployees() : Employee[]{
    return [];
  }
}
