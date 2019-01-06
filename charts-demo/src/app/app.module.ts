import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// User Defined Modules
import { AppCommonModule } from './core/common/common.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './core/modules/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/global/header/header.component';
import { FooterComponent } from './core/global/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppCommonModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
