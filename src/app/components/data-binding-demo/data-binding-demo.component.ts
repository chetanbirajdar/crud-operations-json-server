import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss']
})
export class DataBindingDemoComponent implements OnInit {

  oneWayDB: string = 'One way data binding';
  twoWayDB!: string;
  isHidden: boolean = true;
  numNew: number = 3333333333333332;
  someVariable: any = true;
  empName: string = "Enter name";
  someProperty: string = 'number';


  // variablename : type = value;

  constructor() { }

  ngOnInit(): void {

    this.someVariable = 122;
    this.someVariable = '122';
    this.oneWayDB = undefined;

    if (this.oneWayDB) {
      console.log('this is null')
    }
    console.log(this.oneWayDB)
  }

  submit(event: string) {
    this.twoWayDB = event + 'triggered';
    this.isHidden = !this.isHidden;
  }

  getClass() {
    return 'btn btn-primary';
  }

  clickEvent(eventName: string) {
    this.empName = eventName + " triggered";
  }
}
