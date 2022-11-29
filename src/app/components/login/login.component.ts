import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  employee: Employee = new Employee();

  constructor() { }

  ngOnInit(): void {
  }

}


export class Employee {
  name: string;
  password: string;
}