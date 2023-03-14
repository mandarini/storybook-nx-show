describe('ng-ui-banner', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=bannercomponent--primary&args=text:Hello+world;backgroundColor:#FF00FF66;borderColor:#FF00FF;borderWidth:4;width:350;height:50;'
    )
  );
  it('should render the component', () => {
    cy.get('storybook-nx-show-banner').should('exist');
  });
});
