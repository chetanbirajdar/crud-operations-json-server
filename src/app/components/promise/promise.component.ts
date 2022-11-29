import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const prom1 = new Promise((resolve, reject) => {
      resolve("hello data 1")
      resolve("data 2")
      reject("Error")
    })

    prom1.then(x => console.log(x))
      .catch(y => console.log(y))
  }

}
