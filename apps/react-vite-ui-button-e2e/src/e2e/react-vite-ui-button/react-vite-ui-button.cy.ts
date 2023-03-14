describe('react-vite-ui-button: ReactViteUiButton component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=reactviteuibutton--primary&args=text;color;disabled:false;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ReactViteUiButton!');
  });
});
