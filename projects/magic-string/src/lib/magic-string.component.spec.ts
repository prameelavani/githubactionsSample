import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicStringComponent } from './magic-string.component';

describe('MagicStringComponent', () => {
  let component: MagicStringComponent;
  let fixture: ComponentFixture<MagicStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
