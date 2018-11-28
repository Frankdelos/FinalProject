import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PartyInputComponent } from './party-input/party-input.component';
import { BillTotalComponent } from './bill-total/bill-total.component';
import { TipInputComponent } from './tip-input/tip-input.component';
import { SummaryComponent } from './summary/summary.component';
import { ResultsPageComponent } from './results-page/results-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'party-input',
        component: PartyInputComponent,
    },
    {
        path: 'bill-total',
        component: BillTotalComponent,
    },
    {
        path: 'tip-input',
        component: TipInputComponent,
    },
    {
        path: 'summary',
        component: SummaryComponent,
    },
    {
        path: 'results-page',
        component: ResultsPageComponent,
    },
    {
        path: '**',
        component: HomeComponent,
    }
]


export const AppRoutes = RouterModule.forRoot(routes);
