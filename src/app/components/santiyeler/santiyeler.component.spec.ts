import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantiyelerComponent } from './santiyeler.component';

describe('SantiyelerComponent', () => {
  let component: SantiyelerComponent;
  let fixture: ComponentFixture<SantiyelerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SantiyelerComponent]
    });
    fixture = TestBed.createComponent(SantiyelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
