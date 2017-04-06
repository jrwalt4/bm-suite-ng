import { BmSuiteNgPage } from './app.po';

describe('bm-suite-ng App', () => {
  let page: BmSuiteNgPage;

  beforeEach(() => {
    page = new BmSuiteNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
