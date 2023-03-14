describe('react-rollup-ui-banner: ReactRollupUiBanner component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=reactrollupuibanner--primary&args=backgroundColor;borderColor;text;borderWidth;width;height;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ReactRollupUiBanner!');
  });
});
