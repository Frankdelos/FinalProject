import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { MainFooterComponent } from './main-footer/main-footer.component';

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

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContentComponent,
    MainFooterComponent,
    HomeComponent,
    PartyInputComponent,
    BillTotalComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    AppRoutes,
    MatRadioModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
