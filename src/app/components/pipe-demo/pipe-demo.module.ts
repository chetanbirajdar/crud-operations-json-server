import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDemoComponent } from './pipe-demo.component';
import { PipeDemoRoutingModule } from './pipe-demo-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    PipeDemoComponent
  ],
  imports: [
    CommonModule,
    PipeDemoRoutingModule,
    CoreModule
  ]
})
export class PipeDemoModule { }
