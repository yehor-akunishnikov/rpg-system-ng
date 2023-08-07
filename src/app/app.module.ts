import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AdminModule} from './features/admin/admin.module';
import {UserBoardModule} from './features/user-board/user-board.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    UserBoardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
