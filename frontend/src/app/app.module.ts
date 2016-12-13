import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ShareBooksApp } from './app.component';
import { Login } from '../pages/login/login';

@NgModule({
  declarations: [
    ShareBooksApp,
    Login
  ],
  imports: [
    IonicModule.forRoot(ShareBooksApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ShareBooksApp,
    Login
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
