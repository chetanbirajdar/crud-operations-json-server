import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  isUpdate: boolean = false;


  constructor(private formBuilder: FormBuilder, private empService: EmployeeService,
    private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((res: any) => {
      if (res && res.id) {
        this.isUpdate = true;
        var id = Number(res.id);
        this.empService.getEmployeeById(id).subscribe(empdetails => {
          this.registerForm.patchValue(empdetails);
        })
        // call get api and populate register form
      }
    })
  }
  update() {
    this.empService.updateEmployee(this.registerForm.value).subscribe(x => {
      if (x) {
        this.router.navigate(['/material-demo']);
      }
    })
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    // let response = {
    //   "country": "United States",
    //   "cities": [
    //     "Abbeville",
    //     "Abbeville",
    //     "Abbeville",
    //     "Abbeville",
    //     "Abbeville",
    //     "Abbotsford",
    //   ],
    // };

    // response.cities = [...new Set(response.cities)];

    // console.log(response.cities);


    let array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
      if (array_elements[i] != current) {
        if (cnt > 0) {
          console.log(current + ' comes --> ' + cnt + ' times<br>');
        }
        current = array_elements[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    if (cnt > 0) {
      console.log(current + ' comes --> ' + cnt + ' times');
    }

  }

  get f() { return this.registerForm.controls; }



  submit() {
    this.submitted = true;
    console.log(this.registerForm)

    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    this.empService.addEmployee(this.registerForm.value).subscribe(x => {
      if (x) {
        this.router.navigate(['/material-demo']);
      }

    })

    // this.router.navigate(['/material-demo']);
  }

}
