import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemadeComponent } from './homemade.component';

describe('HomemadeComponent', () => {
  let component: HomemadeComponent;
  let fixture: ComponentFixture<HomemadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomemadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomemadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
