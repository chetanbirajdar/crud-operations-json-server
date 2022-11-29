import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const obs1 = new Observable(x => {
      x.next('Hello there data no.1 ')
      x.next('Hello there data no.2 ')
      x.next('Hello there data no.3 ')

      x.next('Hello there data no.4 ')
      x.error('Error Occureed')
      // x.complete()
      x.next('Hello there data no.5 ')
      x.next('Hello there data no.6 ')
    })

    obs1.subscribe(x => {
      console.log(x)
    })
    obs1.subscribe(x => {
      console.log(x)
    })

  }

}
