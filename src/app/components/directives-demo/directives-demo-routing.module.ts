import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDemoComponent } from './directives-demo.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DirectivesDemoComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesDemoRoutingModule { }
