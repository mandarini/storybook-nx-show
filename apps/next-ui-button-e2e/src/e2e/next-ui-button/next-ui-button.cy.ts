describe('next-ui-button: NextUiButton component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=nextuibutton--primary&args=text:ClickMe;color;disabled:false;'
    )
  );

  it('should render the correct text', () => {
    cy.get('button').should('contain', 'ClickMe');
  });
});
