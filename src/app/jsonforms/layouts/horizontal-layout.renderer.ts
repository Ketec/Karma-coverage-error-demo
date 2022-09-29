import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  HorizontalLayout,
  RankedTester,
  rankWith,
  uiTypeIs,
} from '@jsonforms/core';
import { LayoutRenderer } from './layout.renderer';

@Component({
  selector: 'HorizontalLayoutRenderer',
  template: `
    <ng-container *ngFor="let props of renderProps; trackBy: trackElement">
      <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalLayoutRenderer extends LayoutRenderer<HorizontalLayout> {}
export const horizontalLayoutTester: RankedTester = rankWith(1, uiTypeIs('HorizontalLayout'));
