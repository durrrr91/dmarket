import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HighlightModule } from 'ngx-highlightjs';

import { ContractsService } from './contracts.service';
import { SourcesService } from './sources.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CreateIcoComponent } from './create-ico/create-ico.component';
import { ListingsComponent } from './listings/listings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HomeComponent,
    FooterComponent,
    CreateIcoComponent,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HighlightModule.forRoot({theme: 'atom-one-dark'})
  ],
  providers: [ContractsService, SourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
