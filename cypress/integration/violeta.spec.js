/// <reference types="cypress" />

describe("admin", () => {
    it("Deve poder realizar o cadastro de frase", () => {
      cy.visit("/login");
      // cy.get - busca um elemento
      // type - insere um texto
      cy.get('[type="text"]').type("wesley");
      cy.get('[type="password"]').type("wesley");
      cy.get(".btn-login").click();
  
      cy.get("#ds_frase").type("ola");
      cy.get(".btn-add-frases").click();
    });
  });
  