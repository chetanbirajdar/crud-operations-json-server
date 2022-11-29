import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptDemoComponent } from './typescript-demo.component';

describe('TypescriptDemoComponent', () => {
  let component: TypescriptDemoComponent;
  let fixture: ComponentFixture<TypescriptDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
