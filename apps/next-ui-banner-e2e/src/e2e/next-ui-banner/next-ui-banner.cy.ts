describe('next-ui-banner: NextUiBanner component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=nextuibanner--primary&args=backgroundColor;borderColor;text:HelloThere;borderWidth;width;height;'
    )
  );

  it('should render the correct text', () => {
    cy.get('p').should('contain', 'HelloThere');
  });
});
