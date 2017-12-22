import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/general/main/main.component';
import { ToolbarComponent } from './components/general/toolbar/toolbar.component';
import { SubtoolbarComponent } from './components/general/subtoolbar/subtoolbar.component';
import { PageComponent } from './components/general/page/page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { ActiveContentService } from './services/active-content.service';
import { ActiveFactoryService } from './services/active-factory.service';
import { ActiveServiceResolver } from './resolvers/active-service.resolver';
import { EmailsService } from './services/emails/emails.service';
import { EmailsHttpService } from './services/emails/emails-http.service';
import { KeycloakHttpInterceptor } from './interceptors/keycloak-http.interceptor';
import { KeycloakService } from './keycloak/keycloak.service';
import { ContentCardComponent } from './components/list-page/content-card/content-card.component';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class MaterialModule {
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarComponent,
    SubtoolbarComponent,
    PageComponent,
    ListPageComponent,
    ContentCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ActiveContentService,
    ActiveFactoryService,
    ActiveServiceResolver,
    EmailsService,
    EmailsHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakHttpInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
