import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingQueueComponent } from './processing-queue.component';

describe('ProcessingQueueComponent', () => {
  let component: ProcessingQueueComponent;
  let fixture: ComponentFixture<ProcessingQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
