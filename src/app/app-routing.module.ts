import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {
    path:'ngrx',
    component: CounterComponent
  },
  {
    path:'angular',
    component: CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
