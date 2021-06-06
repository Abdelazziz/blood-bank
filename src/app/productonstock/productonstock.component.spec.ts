import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductonstockComponent } from './productonstock.component';

describe('ProductonstockComponent', () => {
  let component: ProductonstockComponent;
  let fixture: ComponentFixture<ProductonstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductonstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductonstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
