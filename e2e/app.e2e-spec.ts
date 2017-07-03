import { UploadappPage } from './app.po';

describe('uploadapp App', () => {
  let page: UploadappPage;

  beforeEach(() => {
    page = new UploadappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
