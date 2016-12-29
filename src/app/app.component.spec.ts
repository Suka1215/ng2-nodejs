import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule],
     declarations: [AppComponent, FooterComponent,
     HeaderComponent]});
  });
  it ('should work for main', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent)
    .toBe(true, 'should create AppComponent');
  });
});
