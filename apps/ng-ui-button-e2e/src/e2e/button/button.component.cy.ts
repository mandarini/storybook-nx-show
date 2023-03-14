describe('ng-ui-button', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=buttoncomponent--primary&args=text:Click+me;color:#ddffdd;disabled:false;'
    )
  );
  it('should render the component', () => {
    cy.get('storybook-nx-show-button').should('exist');
  });
});
