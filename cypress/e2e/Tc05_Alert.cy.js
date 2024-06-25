/// <reference types="Cypress" />

describe("Handling Different Alerts", () => {
  it("Simple Alert", () => {
    //to handle basic Check Box
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.contains("Click for JS Alert").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am a JS Alert");
    });
    cy.get("#result").should("contain", "You successfully clicked an alert");
  });

  it("Confirm Alert, ok button", () => {
    //to handle basic Check Box
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("I am a JS Confirm");
    });
    cy.get("#result").should("contain", "You clicked: Ok");
  });

  it("Confirm Alert, cancel button", () => {
    //to handle basic Check Box
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.contains("Click for JS Confirm").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("I am a JS Confirm");
      return false;
    });
    cy.get("#result").should("contain", "You clicked: Cancel");
  });

  it("Prompt Alert", () => {
    //to handle basic Check Box
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Hello Prompt Alert");
      cy.contains("Click for JS Prompt").click();
    });

    cy.get("#result").should("contain", "You entered: Hello Prompt Alert");
  });
});
