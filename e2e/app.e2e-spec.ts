import { TesteEscalePage } from './app.po';

describe('teste-escale App', () => {
  let page: TesteEscalePage;

  beforeEach(() => {
    page = new TesteEscalePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
