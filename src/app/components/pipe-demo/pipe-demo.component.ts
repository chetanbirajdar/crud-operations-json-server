import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {

  currentDate: Date = new Date();

  student: string[] = ['chetan', 'priya', 'shraddha'];
  sortArray: number[] = [2, 3, 6, 7, 1, 0, 8];
  studentJson: Student[] = [
    {
      name: 'chetan',
      city: 'pune'
    },
    {
      name: 'priya',
      city: 'solapur'
    },
    {
      name: 'shraddha',
      city: 'mumbai'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  addNumber() {
    this.sortArray.push(4);
  }

}

export class Student {
  name: string;
  city: string;
}

