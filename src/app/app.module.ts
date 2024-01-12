import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarTableComponent } from './Car/car-table-component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, CarTableComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
