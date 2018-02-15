import { Angular2MDPreviewer2Page } from './app.po';

describe('angular2-mdpreviewer2 App', function() {
  let page: Angular2MDPreviewer2Page;

  beforeEach(() => {
    page = new Angular2MDPreviewer2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
