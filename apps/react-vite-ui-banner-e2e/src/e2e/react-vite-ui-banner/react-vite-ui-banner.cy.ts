describe('react-vite-ui-banner: ReactViteUiBanner component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=reactviteuibanner--primary&args=backgroundColor;borderColor;text;borderWidth;width;height;'
    )
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to ReactViteUiBanner!');
  });
});
