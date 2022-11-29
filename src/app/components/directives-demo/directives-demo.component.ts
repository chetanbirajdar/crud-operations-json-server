import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chetan-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss']
})
export class DirectivesDemoComponent implements OnInit {

  items: any = [1, 2, 3]
  xyz: any[] = [];
  x: any = 2;

  constructor() { }


  ngOnInit(): void {
  }

}
