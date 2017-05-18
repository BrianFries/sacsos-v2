import { SacsosV2Page } from './app.po';

describe('sacsos-v2 App', () => {
  let page: SacsosV2Page;

  beforeEach(() => {
    page = new SacsosV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
