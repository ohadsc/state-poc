import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    browser.manage().window().setSize(800, 600)
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
}
