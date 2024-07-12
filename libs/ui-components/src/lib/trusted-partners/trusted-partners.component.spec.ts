import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrustedPartnersComponent } from './trusted-partners.component';

describe('TrustedPartnersComponent', () => {
  let component: TrustedPartnersComponent;
  let fixture: ComponentFixture<TrustedPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedPartnersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrustedPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
