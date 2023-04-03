import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductObjectComponent } from './create-product-object.component';

describe('CreateProductObjectComponent', () => {
  let component: CreateProductObjectComponent;
  let fixture: ComponentFixture<CreateProductObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
