describe('Page Profissionais', () => {
    const profissionaisPage = '/#profissionais';
    it('Should return true if exists title Profissionais', () => {
        cy.visit(profissionaisPage);
        cy.get('#profissionais-title').should('exist');
    });

    it('Should return true if exists description in Profissionais page', () => {
        cy.visit(profissionaisPage);
        cy.get('#profissionais-description').should('exist');
    });

    it('Return true if has box-contact displayed', () => {
        cy.visit(profissionaisPage);
        cy.get('#container-profissionais').should('exist');
    });

    it('Get response when click on nav-bar', () => {
        cy.visit(profissionaisPage);
        cy.get('#profissionais-title').should('exist');
    });

    it('Verify if pagination-mobile is display none', () => {
        cy.visit(profissionaisPage);
        cy.get('.pagination-mobile').should('not.be.visible');
    });
});
