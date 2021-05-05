describe('Add Profissionais', () => {
    before(() => {
        Cypress.env('userLogin', 'testandoTeste');
        const userTest = [
            {
                username: Cypress.env('userLogin'),
                password: Cypress.env('userLogin'),
            },
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
                }).then((response) => {
                    expect(response.body).has.property('username');
                    expect(response.body.username).is.not.null;
                    cy.log(response.body.username);
                    Cypress.env('createUsarioID', response.body.username);
                });
                cy.visit('/login/');
                cy.get('[type="text"]').type('testandoTeste');
                cy.get('[type="password"]').type('testandoTeste');
                cy.get('.btn-login').click();
            } else {
                cy.visit('/login/');
                cy.get('[type="text"]').type('testandoTeste');
                cy.get('[type="password"]').type('testandoTeste');
                cy.get('.btn-login').click();
            }
        });
    });

    it('Should add a profissional', () => {
        cy.get('#nome_contato').type('CONTATO TESTE');
        cy.get('#numero_contato').type('61 1234-56789');
        cy.get('#ds_contato').type('Descrição do contato de teste');
        cy.get('#categoria_fk').select('Ongs');

        cy.intercept({
            method: 'POST',
            url: 'http://localhost:8001/questionario/api/contato-violencia/',
        }).as('postProfissional');

        cy.get('.btn-add-profissional').click();

        cy.wait('@postProfissional')
            .its('response.statusCode')
            .should('eq', 201);
    });
});
