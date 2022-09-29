import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JsonSchema, UISchemaElement } from '@jsonforms/core';

import { jsonFormsRenderers } from '../jsonforms/json-forms-renderers';

@Component({
  selector: 'json-forms',
  templateUrl: './json-forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonFormsComponent {
  renderers = jsonFormsRenderers;

  @Input() uiSchema: UISchemaElement;
  @Input() schema: JsonSchema;
  @Input() data: { [key: string]: unknown };
}
