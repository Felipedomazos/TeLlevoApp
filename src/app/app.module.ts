import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { isPlatform, IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

const getConfig = () => {
  let config = {
    animated: true,
    rippleEffect: true
  };

  if (isPlatform('ios')) {
    config = {
      animated: true,
      rippleEffect: true
    }
  }
  if (isPlatform('android')) {
    config = {
      animated: false,
      rippleEffect: false
    }
  }
  return config;
}


@NgModule({
  declarations: [AppComponent],
  imports: 
  [BrowserModule, 
    IonicModule.forRoot(getConfig()), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(), 
    HttpClientModule,
  ComponentsModule],
  providers: [
    HttpClient,
    EmailComposer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
