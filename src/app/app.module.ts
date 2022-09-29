import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsonFormsComponentModule } from './json-forms/json-forms-component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonFormsComponentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
