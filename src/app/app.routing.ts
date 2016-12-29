import { Routes, RouterModule }     from '@angular/router';
import { AboutComponent }           from './about/about.component';
import { ContactComponent }         from './contact/contact.component';
import { PortfolioComponent }       from './portfolio/portfolio.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'portfolio', component: PortfolioComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
