import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelQuotesComponent } from './marvel-quotes.component';

describe('MarvelQuotesComponent', () => {
  let component: MarvelQuotesComponent;
  let fixture: ComponentFixture<MarvelQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
