import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { InputArray } from './child-demo/child-demo.component';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.scss']
})
export class ParentDemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  myInput: InputArray = new InputArray();
  messageFromChild: string = '';
  constructor() {

    //  console.log("Parent Constructor")

  }

  submit() {
    this.messageFromChild = 'hello'
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Parent ngOnChanges")

  }
  ngDoCheck(): void {
    console.log("Parent ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("Parent ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("Parent ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("Parent ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("Parent ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("Parent ngOnDestroy")
  }

  ngOnInit(): void {
    this.myInput.required = true;
    this.myInput.type = 'number';
    console.log("Parent oninit")
  }



  someMethod(e: any) {
    this.messageFromChild = e;
  }

  someMethod2(e: any) {
    this.messageFromChild = e;
  }


}
