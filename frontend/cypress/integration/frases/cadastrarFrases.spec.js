/// <reference types="cypress" />

describe('admin', () => {
    before(() => {
        const userTest = [
            { username: 'testandoteste', password: 'testandoteste' },
        ];
        cy.visit('/login/');
        cy.request({
            method: 'POST',
            url: 'http://localhost:8004/autenticador/autenticador/login/',
            body: {
                username: userTest[0].username,
                password: userTest[0].password,
            },
            failOnStatusCode: false,
        }).then((response) => {
            Cypress.env('loginStatus', response.status);

            if (response.status === 401) {
                cy.request({
                    method: 'POST',
                    url: 'http://localhost:8004/autenticador/account/register',
                    body: {
                        username: userTest[0].username,
                        password: userTest[0].password,
                    },
                }).then((resp) => {
                    expect(resp.body).has.property('username');
                    expect(resp.body.username).is.not.null;
                    cy.log(resp.body.username);
                    Cypress.env('createUsarioID', resp.body.username);
                });
                cy.visit('/login/');
                cy.get('[type="text"]').type('testandoteste');
                cy.get('[type="password"]').type('testandoteste');
                cy.get('.btn-login').click();
            } else {
                cy.visit('/login/');
                cy.get('[type="text"]').type('testandoteste');
                cy.get('[type="password"]').type('testandoteste');
                cy.get('.btn-login').click();
            }
        });
    });

    it('Deve poder realizar o cadastro de frase', () => {
        cy.intercept({
            method: 'POST',
            url: 'http://localhost:8002/frases/api/frases-motivacionais/',
        }).as('postFrase');

        cy.get('#ds_frase').type('Frase cadastrada agora');
        cy.get('.btn-add-frases').click();

        cy.wait('@postFrase').its('response.statusCode').should('eq', 201);
        cy.get('.btn-logout').click();
    });
});
