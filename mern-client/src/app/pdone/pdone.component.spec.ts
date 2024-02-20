import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdoneComponent } from './pdone.component';

describe('PdoneComponent', () => {
  let component: PdoneComponent;
  let fixture: ComponentFixture<PdoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
