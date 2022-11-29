import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponent } from './components/layouts/blank/blank.component';
import { FullComponent } from './components/layouts/full/full.component';
import { LoginComponent } from './components/login/login.component';
import { TypescriptDemoComponent } from './components/typescript-demo/typescript-demo.component';
import { PromiseComponent } from './components/promise/promise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { ParentDemoComponent } from './components/parent-demo/parent-demo.component';
import { ChildDemoComponent } from './components/parent-demo/child-demo/child-demo.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { FlexDemoComponent } from './components/flex-demo/flex-demo.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    FullComponent,
    LoginComponent,
    TypescriptDemoComponent,
    RegisterComponent,
    ParentDemoComponent,
    ChildDemoComponent,
    MaterialDemoComponent,
    FlexDemoComponent,
    ObservableDemoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
