import { PizzaAppProjectPage } from './app.po';

describe('pizza-app-project App', () => {
  let page: PizzaAppProjectPage;

  beforeEach(() => {
    page = new PizzaAppProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
