import {Routes, RouterModule} from '@angular/router';
import {MainContentComponent} from './main-content/main-content.component';
import { HomeComponent } from './home/home.component';
import { PartyInputComponent } from './party-input/party-input.component';
import { BillTotalComponent } from './bill-total/bill-total.component';

const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
    },
    {
        path: 'party-input',
        component: PartyInputComponent,
    },
    {
        path: '**',
        component: MainContentComponent,
    },
    {
        path: 'bill-total',
        component: BillTotalComponent,
    }

]


export const AppRoutes = RouterModule.forRoot(routes);
