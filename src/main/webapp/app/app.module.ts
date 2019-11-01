import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Appadh3SharedModule } from 'app/shared/shared.module';
import { Appadh3CoreModule } from 'app/core/core.module';
import { Appadh3AppRoutingModule } from './app-routing.module';
import { Appadh3HomeModule } from './home/home.module';
import { Appadh3EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Appadh3SharedModule,
    Appadh3CoreModule,
    Appadh3HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Appadh3EntityModule,
    Appadh3AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class Appadh3AppModule {}
