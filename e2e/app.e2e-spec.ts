import { LibphonenumberDemoAngular2Page } from './app.po';

describe('libphonenumber-demo-angular2 App', () => {
  let page: LibphonenumberDemoAngular2Page;

  beforeEach(() => {
    page = new LibphonenumberDemoAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
