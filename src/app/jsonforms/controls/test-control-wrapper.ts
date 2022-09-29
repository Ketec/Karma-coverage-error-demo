import { Component, Input } from '@angular/core';
import { JsonSchema, UISchemaElement } from '@jsonforms/core';

@Component({
  template: `<json-forms
    [data]="data"
    [schema]="schema"
    [uiSchema]="uiSchema"
    (changes)="changes = $event"
    (errors)="errors = $event"
  ></json-forms>`,
})
export class TestControlWrapperComponent {
  uischema = {
    "type": "HorizontalLayout",
    "elements": [
      {
        "type": "Control",
        "scope": "#/properties/active",
        "label": "Boolean"
      }
    ]
  };

  schemaValue = {
    "type": "object",
    "properties": {
      "active": {
        "type": "boolean"
      }
    }
  } 


  @Input() data: { [key: string]: unknown };
  @Input() schema: JsonSchema = this.schemaValue;
  @Input() uiSchema: UISchemaElement = this.uischema;
  changes: any;
  errors: any;
}
