import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LineChartModule } from 'ngx-echarts-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LineChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
