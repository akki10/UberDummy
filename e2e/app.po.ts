import { browser, element, by } from 'protractor';

export class UberDummyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ud-root h1')).getText();
  }
}
