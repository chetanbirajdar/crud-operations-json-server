import { NgModule } from '@angular/core';
import { HighlightDirective } from './directives/highlight.directive';
import { RupeePipePipe } from './pipes/rupee-pipe.pipe';
import { PureSortPipe } from './pipes/pure-sort.pipe';
import { ImpureSortPipe } from './pipes/impure-sort.pipe';
import { HighlightYellowDirective } from './directives/highlight-yellow.directive';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HighlightDirective,
    RupeePipePipe,
    PureSortPipe,
    ImpureSortPipe,
    HighlightYellowDirective
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    HighlightDirective,
    RupeePipePipe,
    PureSortPipe,
    ImpureSortPipe,
    HighlightYellowDirective,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
