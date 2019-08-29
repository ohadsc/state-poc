import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    browser.waitForAngularEnabled(true);
    page.navigateTo()
      .then(_ => browser.manage().window().setSize(800, 600))
    expect(page.getTitleText()).toEqual('Welcome to state-poc!');
  });
});
