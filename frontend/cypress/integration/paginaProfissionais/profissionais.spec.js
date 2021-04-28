describe('Page Profissionais', () => {
    it('Should return true if exists title Profissionais', () => {
        cy.visit('/#profissionais');
        cy.expect('Profissionais').to.exist;
    });
});
