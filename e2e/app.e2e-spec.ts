import { SimacogoPage } from './app.po';

describe('simacogo App', function() {
  let page: SimacogoPage;

  beforeEach(() => {
    page = new SimacogoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
