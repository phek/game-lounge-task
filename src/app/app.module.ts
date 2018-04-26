import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {PageComponent} from './pages/page/page.component';

import {MenuService} from './api/menu.service';

import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
