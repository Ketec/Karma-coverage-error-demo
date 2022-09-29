import { RankedTester } from '@jsonforms/core';
import { HorizontalLayoutRenderer, horizontalLayoutTester } from './layouts/index';
import {
  BooleanControlRenderer,
  booleanControlTester
} from './controls/index';

export * from './controls/index';
export * from './layouts/index';

export const jsonFormsRenderers: { tester: RankedTester, renderer: unknown }[] = [
  // layouts
  {tester: horizontalLayoutTester, renderer: HorizontalLayoutRenderer},
  // controls
  {tester: booleanControlTester, renderer: BooleanControlRenderer}
];
