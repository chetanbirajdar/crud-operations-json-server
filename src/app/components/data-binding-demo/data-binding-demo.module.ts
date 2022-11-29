import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingDemoComponent } from './data-binding-demo.component';
import { DataBindingDemoRoutingModule } from './data-binding-demo-routing.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [DataBindingDemoComponent], // components
  imports: [ //modules
    CommonModule,
    DataBindingDemoRoutingModule,
    FormsModule,
    CoreModule
  ]
})
export class DataBindingDemoModule { }
