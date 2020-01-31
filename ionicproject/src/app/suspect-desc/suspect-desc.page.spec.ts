import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuspectDescPage } from './suspect-desc.page';

describe('SuspectDescPage', () => {
  let component: SuspectDescPage;
  let fixture: ComponentFixture<SuspectDescPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectDescPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuspectDescPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
