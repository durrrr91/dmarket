import { IcoPage } from './app.po';

describe('ico App', () => {
  let page: IcoPage;

  beforeEach(() => {
    page = new IcoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
