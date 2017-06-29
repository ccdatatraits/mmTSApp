import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PixelTesterPage } from '../pages/pixel-tester/pixel-tester';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';

import { HTTP } from '@ionic-native/http';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PixelTesterPage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PixelTesterPage,
    TabsControllerPage
  ],
  providers: [
    HTTP,
    UniqueDeviceID,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}