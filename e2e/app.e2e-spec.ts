import { SmallShopPage } from './app.po';

describe('small-shop App', function() {
  let page: SmallShopPage;

  beforeEach(() => {
    page = new SmallShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
