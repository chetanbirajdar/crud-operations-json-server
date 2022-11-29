import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDemoComponent } from './pipe-demo.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PipeDemoComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeDemoRoutingModule { }
