describe('Depoimentos Page', () => {
    const depoimentosPage = '#depoimentos';
    it('Must have a title Depoimento', () => {
        cy.visit(depoimentosPage);
        cy.get('#title-depoimento').should('exist');
    });

    it('Should be possible to make a depoimento', () => {
        cy.visit(depoimentosPage);
        cy.get('#depoimento-enviar').click();
        cy.get('[type="text"]').type('This is a depoimento test');
        cy.get('[type="submit"]').click();
        cy.get('#depoimento-confirm-close').click();
    });

    it('Must have at least one depoimento visible', () => {
        cy.visit(depoimentosPage);
        cy.get('.ds-depoimento').should('exist');
    });
});
