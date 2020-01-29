import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageGenerationPage } from './image-generation.page';

describe('ImageGenerationPage', () => {
  let component: ImageGenerationPage;
  let fixture: ComponentFixture<ImageGenerationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGenerationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
