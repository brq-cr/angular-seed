import { AngularBasePage } from './app.po';

describe('angular-base App', function() {
  let page: AngularBasePage;

  beforeEach(() => {
    page = new AngularBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
