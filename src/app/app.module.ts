import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { HttpModule }                       from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing }                          from './app.routing';
import { RouterTestingModule }              from '@angular/router/testing';
import { AppComponent }                     from './app.component';
import { HeaderComponent }                  from './header/header.component';
import { FooterComponent }                  from './footer/footer.component';
import { AboutComponent }                   from './about/about.component';
import { ContactComponent }                 from './contact/contact.component';
import { PortfolioComponent }               from './portfolio/portfolio.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    RouterTestingModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
