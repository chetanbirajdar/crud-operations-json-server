import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightYellow]'
})
export class HighlightYellowDirective {

  constructor(private el: ElementRef) {

    this.el.nativeElement.style.color = 'green'
  }

}
