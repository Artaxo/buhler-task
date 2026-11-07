import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineLinePageComponent } from './machine-line-page.component';

describe('MachineLinePageComponent', () => {
  let component: MachineLinePageComponent;
  let fixture: ComponentFixture<MachineLinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineLinePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MachineLinePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
