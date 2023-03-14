describe('react-vite-ui-banner: ReactViteUiBanner component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=reactviteuibanner--primary&args=text:Oh+no+something+went+wrong;borderWidth:5;'
    )
  );

  it('should render the correct text', () => {
    cy.get('p').should('contain', 'Oh no something went wrong');
  });
});
