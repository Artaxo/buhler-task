import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentDateTimeComponent } from './current-date-time.component';

describe('CurrentDateTimeComponent', () => {
  let component: CurrentDateTimeComponent;
  let fixture: ComponentFixture<CurrentDateTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentDateTimeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentDateTimeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
