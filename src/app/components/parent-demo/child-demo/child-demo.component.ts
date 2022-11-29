import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.scss']
})
export class ChildDemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    // console.log("        Child Constructor")
  }

  // input decorator uses property binding

  @Input() childProperty: InputArray = new InputArray();
  @Input() childProp2 = '';

  @Output() childEvent = new EventEmitter<string>();

  @Output() childEvent2 = new EventEmitter<string>();
  x: InputArray = new InputArray();

  ngOnInit(): void {
    console.log("        Child oninit")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("        Child ngOnChanges")

  }
  ngDoCheck(): void {
    console.log("        Child ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("        Child ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("        Child ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("        Child ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("        Child ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("        Child ngOnDestroy")
  }


  sendValue() {
    this.childEvent.emit('I am an event from child component');
  }

  sendVal2() {
    this.childEvent2.emit('I am an event from 2nd child component');
  }

}


export class InputArray {
  required: boolean;
  type: string
}