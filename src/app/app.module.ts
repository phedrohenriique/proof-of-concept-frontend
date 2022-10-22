import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ObservableComponent } from './observable/observable.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter.reduce';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
