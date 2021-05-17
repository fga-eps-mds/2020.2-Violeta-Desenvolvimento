describe('Questionario', () => {
  it('Should return true if exists a button that redirect to quiz section', () => {
      cy.visit('/');
      cy.get('#btn').click();
      cy.url().should('eq', 'http://localhost:3000/#questionario');
  });

  it('Should return true if could answer the quiz with negative answers', () => {
      cy.visit('/#questionario');
      cy.get('.container-btn > :nth-child(2)').click();
      cy.get('.container-graph > :nth-child(3)').click();
      cy.get('.container-btn > :nth-child(2)').click();
      cy.get('.container-graph > :nth-child(3)').click();
      cy.get('.container-btn > :nth-child(2)').click();
      cy.get('.container-graph > :nth-child(3)').click();
      cy.get('.container-btn > :nth-child(2)').click();
      cy.get('.container-graph > :nth-child(3)').click();
      cy.get('.container-btn > :nth-child(2)').click();
      cy.get('.popup-inner').should('exist');
      cy.get('.Close-Quiz > path').click();
  });

  it('Should return true if could answer the quiz with positive answers', () => {
    cy.visit('/#questionario');
    cy.get('.container-btn > :nth-child(2)').click();

    for(var question = 0; question < 17; question += 1){
      cy.get('.container-graph > :nth-child(2)').click();
      cy.get('.container-btn > :nth-child(2)').click();
    }
    cy.get('#title-popup-feedback').should('exist');
    cy.get('.Close-Quiz').click();
    cy.visit('/#questionario');
  });

  it('Should return true if could answer the quiz with negative answers and re-answer with positive options', () => {
    cy.visit('/#questionario');
    cy.get('.container-btn > :nth-child(2)').click();

    for(var question = 0; question < 3; question += 1){
      cy.get('.container-graph > :nth-child(3)').click();
      cy.get('.container-btn > :nth-child(2)').click();
    }
    for(var question = 0; question < 3; question += 1){
      cy.get('.container-btn > :nth-child(1)').click();
    }
    for(var question = 0; question < 17; question += 1){
      cy.get('.container-graph > :nth-child(2)').click();
      cy.get('.container-btn > :nth-child(2)').click();
    }
    cy.get('#title-popup-feedback').should('exist');
    cy.get('.Close-Quiz').click();
    cy.visit('/#questionario');
  });
});