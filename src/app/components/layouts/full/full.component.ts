import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  menu: Menu[] = [
    {
      name: 'Data Binding Demo',
      path: 'data-binding-demo'
    },
    {
      name: 'Directives Demo',
      path: 'directives-demo'
    },
    {
      name: 'Typescript Demo',
      path: 'typescript-demo'
    },
    {
      name: 'Pipes Demo',
      path: 'pipes-demo'
    },
    {
      name: 'Parent Demo',
      path: 'parent-demo'
    },
    {
      name: 'Material Demo',
      path: 'material-demo'
    },
    {
      name: 'Flex Demo',
      path: 'flex-demo'
    },
    {
      name: 'Observable Demo',
      path: 'observable-demo'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

