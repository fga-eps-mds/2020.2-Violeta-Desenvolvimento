describe('Depoimentos admin page', () => {
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

    it('Should be possible to approve a depoimento and logout', () => {
        cy.get(
            ':nth-child(1) > .labelDepoimento > .divInput > .inputDepoimento'
        ).check();

        cy.get('.btn-aprova-depoimento').click();

        cy.get('.btn-logout').click();
    });
});