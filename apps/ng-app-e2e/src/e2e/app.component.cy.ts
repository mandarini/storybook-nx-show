describe('ng-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('storybook-nx-show-root').should('exist');
  });
});
