import { Aa2TodoPage } from './app.po';

describe('aa2-todo App', function() {
  let page: Aa2TodoPage;

  beforeEach(() => {
    page = new Aa2TodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
