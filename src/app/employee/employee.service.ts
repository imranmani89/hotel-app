import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  addEmployee(employee : Employee): void {
    employee.id = Date.now().toString();
    alert(`id ${employee.id} has been Added.`);
   }

  updateEmployee(id: string, employee: Employee): void {
    alert(`id ${id} has been updated.`);
  }

  deleteEmployee(id: string): void {
    alert(`id ${id} has been deleted.`);
  }

  getEmployees(): Employee[] {
    return [];
  }

  getEmployee(id: string): Employee {
    return {
      id: "1",
      name: "Imran",
      fatherName: "Imtiaz Sadiq",
      DOB: new Date("1989-07-06"),
      isActive: false
    };
  }

}
