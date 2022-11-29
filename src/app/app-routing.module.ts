import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingDemoComponent } from './components/data-binding-demo/data-binding-demo.component';
import { FlexDemoComponent } from './components/flex-demo/flex-demo.component';
import { BlankComponent } from './components/layouts/blank/blank.component';
import { FullComponent } from './components/layouts/full/full.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { ParentDemoComponent } from './components/parent-demo/parent-demo.component';
import { RegisterComponent } from './components/register/register.component';
import { TypescriptDemoComponent } from './components/typescript-demo/typescript-demo.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'data-binding-demo',
        // component: DataBindingDemoComponent
        loadChildren: () => import('./components/data-binding-demo/data-binding-demo.module')
          .then(x => x.DataBindingDemoModule)
      },
      {
        path: 'directives-demo',
        //  component: DirectivesDemoComponent
        loadChildren: () => import('./components/directives-demo/directives-demo.module').then(x => x.DirectivesDemoModule)

      },
      {
        path: 'pipes-demo',
        loadChildren: () => import('./components/pipe-demo/pipe-demo.module').then(x => x.PipeDemoModule)

      },
      {
        path: 'typescript-demo',
        component: TypescriptDemoComponent
        // loadChildren: () => import('./components/directives-demo/directives-demo.module').then(x => x.DirectivesDemoModule)

      },
      {
        path: 'parent-demo',
        component: ParentDemoComponent
      },
      {
        path: 'material-demo',
        component: MaterialDemoComponent
      },
      {
        path: 'flex-demo',
        component: FlexDemoComponent
      },
      {
        path: 'observable-demo',
        component: ObservableDemoComponent
      },
      {
        path: 'promise-demo',
        loadChildren: () => import('./components/promise/promise.module').then(x => x.PromiseModule)
      }

    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'register/:id',
        component: RegisterComponent
      },
    ]
  },

  {
    path: 'data-binding-demo',
    component: DataBindingDemoComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
