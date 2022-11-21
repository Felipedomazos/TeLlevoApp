import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTitle() {
    return element(by.css('.tituloLogin ion-title')).getText();
  }
  
  getUser() {
    return element(by.id('user')).getText();
  }

  getPass() {
    return element(by.id('pass')).getText();
  }
}
