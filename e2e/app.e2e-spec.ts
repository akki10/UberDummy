import { UberDummyPage } from './app.po';

describe('uber-dummy App', function() {
  let page: UberDummyPage;

  beforeEach(() => {
    page = new UberDummyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ud works!');
  });
});
