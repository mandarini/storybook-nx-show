describe('next-app: Container component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=container--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to Container!');
  });
});
