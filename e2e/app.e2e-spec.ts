import { CiwoPage } from './app.po';

describe('ciwo App', function() {
  let page: CiwoPage;

  beforeEach(() => {
    page = new CiwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
