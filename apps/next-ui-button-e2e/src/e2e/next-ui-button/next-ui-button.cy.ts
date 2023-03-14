describe('next-ui-button: NextUiButton component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=nextuibutton--primary&args=text;color;disabled:false;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to NextUiButton!');
  });
});
