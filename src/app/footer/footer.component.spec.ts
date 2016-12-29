import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('Footer Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [FooterComponent]});
  });
  it ('should work for footer', () => {
    let fixture = TestBed.createComponent(FooterComponent);
    expect(fixture.componentInstance instanceof FooterComponent)
    .toBe(true, 'should create footer component');
  });
});
