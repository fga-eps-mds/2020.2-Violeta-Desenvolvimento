/// <reference types="cypress" />

describe('frases', () => {
    it('Deve poder identificar as frases motivacionais na página', () => {
        cy.visit('http://localhost:3000/');

        cy.expect(':nth-child(4) > .visualizar-frases > p').to.exist;
        cy.expect(':nth-child(6) > .visualizar-frases > p').to.exist;
        cy.expect(':nth-child(8) > .visualizar-frases > p').to.exist;
    });
});
