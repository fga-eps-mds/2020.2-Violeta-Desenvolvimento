describe('Graph Display', () => {
    it('Check Graph', () => {
        cy.intercept({
            method: 'GET',
            url: 'http://localhost:8001/questionario/api/vitimas-categoria/',
        }).as('getGraph');
        cy.visit('/#graficos');
        cy.get('.container-box-violencia').click();
        cy.wait('@getGraph')
            .then((xhr) => {
                expect(xhr.response.body).is.not.null;
            })
            .its('response.statusCode')
            .should('eq', 200);
    });
});
