import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
employeeForm: FormGroup = new FormGroup({});

constructor(){}

onSubmit(): void{

}
}
