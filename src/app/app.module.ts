import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ToastModule } from './toast/toast.module';
import {MatCardModule} from '@angular/material/card';


//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { MatRadioModule } from '@angular/material/radio';
import { HttpModule } from '@angular/http';

//routing material
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { PartyInputComponent } from './party-input/party-input.component';
import { BillTotalComponent } from './bill-total/bill-total.component';
import { TipInputComponent } from './tip-input/tip-input.component';
import { SummaryComponent } from './summary/summary.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { RussianPageComponent } from './russian-page/russian-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContentComponent,
    MainFooterComponent,
    HomeComponent,
    PartyInputComponent,
    BillTotalComponent,
    TipInputComponent,
    SummaryComponent,
    ResultsPageComponent,
    RussianPageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    AppRoutes,
    MatRadioModule,
    HttpModule,
    ToastModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
