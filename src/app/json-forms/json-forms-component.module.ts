import { NgModule } from '@angular/core';
import { JsonFormsComponent } from './json-forms.component';
import { JsonFormsRendererModule } from '../jsonforms/json-forms-renderer.module';

@NgModule({
  declarations: [
    JsonFormsComponent
  ],
  imports: [
    JsonFormsRendererModule
  ],
  exports: [
    JsonFormsComponent
  ]
})
export class JsonFormsComponentModule { }
