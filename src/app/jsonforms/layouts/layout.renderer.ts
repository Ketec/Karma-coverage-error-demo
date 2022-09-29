import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsBaseRenderer } from '@jsonforms/angular';
import {
  Layout,
  mapStateToLayoutProps,
  OwnPropsOfRenderer,
} from '@jsonforms/core';
import { Subscription } from 'rxjs';

@Component({
  template: ''
})
export abstract class LayoutRenderer<T extends Layout> extends JsonFormsBaseRenderer<T> implements OnInit, OnDestroy {
  hidden: boolean;
  private subscription: Subscription;

  constructor(private jsonFormsService: JsonFormsAngularService, private changeDetectionRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
    this.subscription = this.jsonFormsService.$state.subscribe({
      next: (state) => {
        const props = mapStateToLayoutProps(state, this.getOwnProps());
        this.hidden = !props.visible;
        this.changeDetectionRef.markForCheck();
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get renderProps(): OwnPropsOfRenderer[] {
    return (this.uischema.elements || []).map((el) => ({
      uischema: el,
      schema: this.schema,
      path: this.path,
    }));
  }

  trackElement(_index: number, renderProp: OwnPropsOfRenderer): string | null {
    return renderProp ? renderProp.path + JSON.stringify(renderProp.uischema) : null;
  }
}
