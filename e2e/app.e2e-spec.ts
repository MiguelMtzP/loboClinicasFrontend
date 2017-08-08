import { AppPracticasEstomaPage } from './app.po';

describe('app-practicas-estoma App', () => {
  let page: AppPracticasEstomaPage;

  beforeEach(() => {
    page = new AppPracticasEstomaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
