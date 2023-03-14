describe('react-rollup-ui-button: ReactRollupUiButton component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=reactrollupuibutton--primary&args=text;color;disabled:false;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ReactRollupUiButton!');
  });
});
