describe('Autenticador Page', () => {
    it('verifies if the login autentication page is valid', () => {
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
            expect(response.body.username).is.not.null;
            cy.log(response.body.username);
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
                loginAsUser('testandoTeste', 'testandoTeste');
            } else {
                loginAsUser('testandoTeste', 'testandoTeste');
            }
            cy.get('.btn-logout').click();
        });
    });
    it('Should return 401 error when non-authorized login tryes to login', () => {
        cy.visit('/login/');
        cy.get('[type="text"]').type('testandoTeste');
        cy.get('[type="password"]').type('thisisanotherpassword');
        cy.get('.btn-login')
            .click()
            .then((response) => {
                cy.expect(response.status === 401);
            });
    });

    function loginAsUser(username, password) {
        cy.visit('/login/');
        cy.get('[type="text"]').type(username);
        cy.get('[type="password"]').type(password);
        cy.get('.btn-login').click();
    }
});


