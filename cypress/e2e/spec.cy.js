describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('h1').click();
    cy.get('h1').click();
    cy.get('h1').click();
    cy.get('h1').click();
    cy.get('h1').click();
    cy.get('h1').click();
    cy.get('h1').should('have.text', 'Kitchen Sink');
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click();
    cy.get(':nth-child(3) > .col-xs-7 > pre').click();
    cy.get(':nth-child(1) > .col-xs-5').click();
    cy.get('#query-btn').click();
    cy.get('.banner > .container').click();
    cy.get('.example > code').click();
    cy.get('#inputName').clear('ret');
    cy.get('#inputName').type('retetg{enter}');
    cy.get('#inputEmail').clear('fe');
    cy.get('#inputEmail').type('fewfwfwfwf');
    cy.get('#inputPassword').clear('wef');
    cy.get('#inputPassword').type('wefwfwef');
    /* ==== End Cypress Studio ==== */
  })

  it('passes2', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').click();
    cy.get('h1').click();
    cy.get('h1').click();
    cy.log('test meeeee')
  })

  it('passes3', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').click();
    cy.log('test meeeee')
  })
})