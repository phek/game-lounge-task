import { GameloungePage } from './app.po';

describe('gamelounge App', function() {
  let page: GameloungePage;

  beforeEach(() => {
    page = new GameloungePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
