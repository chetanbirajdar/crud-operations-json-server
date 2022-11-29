import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.scss']
})
export class MaterialDemoComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  employee: Employee[] = [];

  displayedColumns: string[] = ['id', 'name', 'city', 'email', 'phone', 'action'];

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.getEmployeeResult();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getEmployeeResult() {
    this.empService.getEmployee().subscribe(res => {
      console.log(res);
      this.employee = res
    })
  }

  deleteEmployee(empId: number) {
    this.empService.deleteEmployee(empId).subscribe(x => {
      this.getEmployeeResult();
    });

  }

  editEmployee(empId: number) {
    this.router.navigate(['/register', empId])

  }

}

export class Employee {
  id: number
  name: string
  city: string
  phone: string
  email: string
}

