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
import { ClonesComponent } from './component/clones/clones.component';
import { Clone1Component } from './component/clone/clone1/clone1.component';
import { Clone2Component } from './component/clone/clone2/clone2.component';
import { Veg1Component } from './component/veg/veg1/veg1.component';
import { Veg2Component } from './component/veg/veg2/veg2.component';
import { Veg3Component } from './component/veg/veg3/veg3.component';

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
    NotifactionsComponent,
    ClonesComponent,
    Clone1Component,
    Clone2Component,
    Veg1Component,
    Veg2Component,
    Veg3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
