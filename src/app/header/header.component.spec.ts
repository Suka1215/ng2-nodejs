import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('Header Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [HeaderComponent]});
  });
  it ('should work for header', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    expect(fixture.componentInstance instanceof HeaderComponent)
    .toBe(true, 'should create header component');
  });
});
