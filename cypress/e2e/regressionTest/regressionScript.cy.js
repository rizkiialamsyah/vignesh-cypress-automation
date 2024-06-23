/// <reference types="Cypress" />

describe("Login Functionality", () => {
  it("Login test using Conduit", () => {
    cy.visit("https://react-redux.realworld.io");
    cy.get("a[href='#login']").click();
    cy.get("input[type='email']").type("cypressdemo@gmail.com");
    cy.get("input[type='password']").type("cypressdemo");
    cy.get("button[type='submit']").click();
    cy.get(".feed-toggle > .nav > :nth-child(1) > .nav-link").contains(
      "Your Feed"
    );
    cy.get("a[href='#settings']").click();
    cy.get("button[class='btn btn-outline-danger']").click();
  });
});
