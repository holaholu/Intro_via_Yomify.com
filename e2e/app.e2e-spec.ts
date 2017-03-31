import { NewyomifyPage } from './app.po';

describe('newyomify App', () => {
  let page: NewyomifyPage;

  beforeEach(() => {
    page = new NewyomifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
