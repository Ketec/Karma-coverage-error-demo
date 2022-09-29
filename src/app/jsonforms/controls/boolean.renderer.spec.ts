import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestControlWrapperComponent } from './test-control-wrapper';
import { By } from '@angular/platform-browser';
import { JsonFormsComponentModule } from 'src/app/json-forms/json-forms-component.module';

describe('BooleanControlRenderer', () => {
  let component: TestControlWrapperComponent;
  let fixture: ComponentFixture<TestControlWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestControlWrapperComponent],
      imports: [JsonFormsComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TestControlWrapperComponent);
    component = fixture.componentInstance;
    component.data = {};
    fixture.detectChanges();
  });

  it('should not be checked', () => {
    expect(fixture.debugElement.query(By.css('input')).nativeElement.checked).toBeFalse();
  });
});
