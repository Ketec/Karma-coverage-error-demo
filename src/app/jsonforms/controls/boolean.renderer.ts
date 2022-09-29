import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JsonFormsControl } from '@jsonforms/angular';
import { isBooleanControl, RankedTester, rankWith } from '@jsonforms/core';

@Component({
  selector: 'BooleanControlRenderer',
  template: `
    <input
      type="checkbox"
      [formControl]="form"
      (change)="onChange($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooleanControlRenderer extends JsonFormsControl implements OnInit {
  getEventValue = (event: Event) => (<HTMLInputElement>event.target)?.checked;
}

export const booleanControlTester: RankedTester = rankWith(2,  isBooleanControl);
