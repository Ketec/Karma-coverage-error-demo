import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonFormsModule } from '@jsonforms/angular';

import {
  BooleanControlRenderer
} from './controls';

import {
  HorizontalLayoutRenderer,
} from './layouts';

@NgModule({
  imports: [
    CommonModule,
    JsonFormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HorizontalLayoutRenderer,
    BooleanControlRenderer
  ],
  exports: [
    JsonFormsModule
  ]
})
export class JsonFormsRendererModule {}
