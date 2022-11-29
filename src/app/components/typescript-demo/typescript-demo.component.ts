import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-demo',
  templateUrl: './typescript-demo.component.html',
  styleUrls: ['./typescript-demo.component.scss']
})
export class TypescriptDemoComponent implements OnInit {

  varString: string = '';
  varNumber: number = 0;
  varBoolean: boolean = false;
  date: Date = new Date();
  varUnknown: any;
  x: string = '4';
  // arrays/ json array
  // array/string operations
  numArray: number[] = [1, 2, 3, 4];
  newArray: number[] = [];
  employee: Employee = new Employee('chetan');

  constructor() { }

  ngOnInit(): void {
    this.varUnknown = 'string';
    this.varUnknown = 23;
    this.someMethod('3');
    this.employee.city = 'Pune';
    this.employee.companies = [{
      companyName: 'infosys',
      address: 'pune'
    },
    {
      companyName: 'cognizant',
      address: 'chennai'
    }]
    this.employee.company.companyName = 'Accenture'
    this.employee.company.address = 'Noida'
    console.log(this.employee)

    // array operations

    this.numArray.push(100)
    this.numArray.pop()
    // this.newArray = this.numArray.slice(1, 2); // delete
    // this.newArray = this.numArray.splice(3, 0, 7); // add, update, delete
    // foreach
    var i = 1;
    this.numArray.forEach(x => {
      x = x + i;
      i++;

      console.log(x);
    })

    this.numArray.forEach(element => {

    });
    this.numArray.find(x => { })
    this.numArray.filter(x => { })


    // find, filter, sort, concat, length, reduce, map, 

  }

  someMethod(x: string) {
    console.log(this.x);
  }

}

export class Employee {
  constructor(pname?: string) {
    this.name = pname;
  }
  name: string;
  city: string;
  company: Company = new Company();
  companies: Company[] = [];

}

export class Company {
  companyName: string;
  address: string;
}
