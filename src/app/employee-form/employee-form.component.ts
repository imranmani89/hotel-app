import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../models/employee';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      fatherName: ['', Validators.required],
      DOB: ['', Validators.required],
      isActive: [false]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      let employee : Employee =  this.employeeForm.value;
      console.log(this.employeeForm.value);
    }
  }
}
