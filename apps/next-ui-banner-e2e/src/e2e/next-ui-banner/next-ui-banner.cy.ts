describe('next-ui-banner: NextUiBanner component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=nextuibanner--primary&args=backgroundColor;borderColor;text;borderWidth;width;height;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to NextUiBanner!');
  });
});
