import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureAllComponent } from './furniture-all.component';

describe('FurnitureAllComponent', () => {
  let component: FurnitureAllComponent;
  let fixture: ComponentFixture<FurnitureAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnitureAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FurnitureAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
