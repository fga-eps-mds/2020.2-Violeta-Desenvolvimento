describe('Page Profissionais', () => {
    const profissionaisPage = '/#profissionais';
    it('Should return true if exists title Profissionais', () => {
        cy.visit(profissionaisPage);
        cy.expect('Profissionais').to.exist;
    });

    it('Should return true if exists description in Profissionais page', () => {
        cy.visit(profissionaisPage);
        cy.expect('#profissionais-description').to.exist;
    });

    it('Return true if has box-contact displayed', () => {
        cy.visit(profissionaisPage);
        cy.get('#container-profissionais').should('exist');
    });

    it('Get response when click on nav-bar', () => {
        cy.visit(profissionaisPage);
        cy.contains('Ongs').click();
    });

    it('Verify if pagination-mobile is display none', () => {
        cy.visit(profissionaisPage);
        cy.get('.pagination-mobile').should('not.be.visible');
    });
});
