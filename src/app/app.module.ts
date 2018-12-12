import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsLibModule } from 'ngx-echarts-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
