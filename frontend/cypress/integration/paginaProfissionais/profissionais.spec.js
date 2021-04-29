describe('Page Profissionais', () => {
    it('Should return true if exists title Profissionais', () => {
        cy.visit('/#profissionais');
        cy.expect('Profissionais').to.exist;
    });

    it('Should return true if exists description in Profissionais page', () => {
        cy.visit('/#profissionais');
        cy.expect('#profissionais-description').to.exist;
    });

    it('Get response when click on nav-bar', () => {
        cy.visit('/#profissionais');
        cy.contains('Ongs').click();
    });

    it('Verify if pagination-mobile is display none', () => {
        cy.visit('/#profissionais');
        cy.get('.pagination-mobile').should('not.be.visible');
    });
});
