/// <reference types="Cypress" />

describe("Radio Button Functionality", () => {
  it("Handling different radio button", () => {
    //to handle basic radio button
    cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/");
    cy.get("#radio-choice-0a").should("not.be.checked").click({ force: true });
    cy.get("#radio-choice-0b").should("not.be.checked").click({ force: true });

    //Handle modern radio button
    cy.get("#radio-choice-h-2b")
      .should("not.be.checked")
      .click({ force: true });
    cy.get("#radio-choice-h-2c")
      .should("not.be.checked")
      .click({ force: true });
  });
});
