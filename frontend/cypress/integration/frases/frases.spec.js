/// <reference types="cypress" />

describe('frases', () => {
    before(() => {
        cy.visit('/');
    });
    it('Deve poder identificar as frases motivacionais na página', () => {
        const frase0 = ':nth-child(4) > .visualizar-frases > p';
        const frase1 = ':nth-child(6) > .visualizar-frases > p';
        const frase2 = ':nth-child(8) > .visualizar-frases > p';
        cy.get(frase0).should('exist');
        cy.get(frase1).should('exist');
        cy.get(frase2).should('exist');
    });
});
