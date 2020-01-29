import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseOptionPage } from './choose-option.page';

describe('ChooseOptionPage', () => {
  let component: ChooseOptionPage;
  let fixture: ComponentFixture<ChooseOptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseOptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseOptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
