import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { Middle1Component } from './component/middle1/middle1.component';
import { Middle2Component } from './component/middle2/middle2.component';
import { LogoComponent } from './component/subHeader/logo/logo.component';
import { LoginComponent } from './component/subHeader/login/login.component';
import { LogoutComponent } from './component/subHeader/logout/logout.component';
import { NotifactionsComponent } from './component/subHeader/notifactions/notifactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Middle1Component,
    Middle2Component,
    LogoComponent,
    LoginComponent,
    LogoutComponent,
    NotifactionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
