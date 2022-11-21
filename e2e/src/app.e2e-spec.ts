import { AppPage } from './app.po';

describe('Iniciar Aplicacion', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Aplicacion Iniciada', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('TeLlevoApp');
  });
});
