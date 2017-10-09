import { ProvaEsse3Page } from './app.po';

describe('prova-esse3 App', () => {
  let page: ProvaEsse3Page;

  beforeEach(() => {
    page = new ProvaEsse3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
