import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CariEkstreComponent } from './cari-ekstre.component';

describe('CariEkstreComponent', () => {
  let component: CariEkstreComponent;
  let fixture: ComponentFixture<CariEkstreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CariEkstreComponent]
    });
    fixture = TestBed.createComponent(CariEkstreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
