import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { BtnAndPrintComponent } from './btn-and-print/btn-and-print.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    BtnAndPrintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
