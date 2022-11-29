import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesDemoComponent } from './directives-demo.component';
import { DirectivesDemoRoutingModule } from './directives-demo-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [DirectivesDemoComponent], // components
  imports: [
    CommonModule,
    DirectivesDemoRoutingModule, //
    CoreModule

  ]
})
export class DirectivesDemoModule { }
