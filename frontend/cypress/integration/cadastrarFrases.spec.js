/// <reference types="cypress" />

describe('admin', () => {
    it('Deve poder realizar o login de adm', () => {
        const createUsarioID = Cypress.env('createUsarioID');
        cy.log(createUsarioID);
        cy.visit('/login');
        cy.get('[type="text"]').type(createUsarioID);
        cy.get('[type="password"]').type(createUsarioID);
        cy.get('.btn-login').click();
    });

    it('Deve poder realizar o cadastro de frase', () => {
        cy.intercept({
            method: 'POST',
            url: 'http://localhost:8002/frases/api/frases-motivacionais/',
        }).as('postFrase');

        cy.get('#ds_frase').type('Frase cadastrada agora');
        cy.get('.btn-add-frases').click();

        cy.wait('@postFrase').its('response.statusCode').should('eq', 201);
    });
});
