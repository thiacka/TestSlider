import { TestSliderPage } from './app.po';

describe('test-slider App', () => {
  let page: TestSliderPage;

  beforeEach(() => {
    page = new TestSliderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
