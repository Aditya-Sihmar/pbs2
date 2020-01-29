import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditImagePage } from './edit-image.page';

describe('EditImagePage', () => {
  let component: EditImagePage;
  let fixture: ComponentFixture<EditImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
