/// <reference types="Cypress" />

describe("Drop Down Functionality", () => {
  it("Handling Static Drop down element", () => {
    //to handle basic Check Box
    cy.visit("https://seleniumbase.io/demo_page");
    cy.get("#mySelect").select("Set to 100%").should("have.value", "100%");
  });

  it("Handling dynamic Drop down element", () => {
    //to handle basic Check Box
    cy.visit(
      "https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx"
    );
    cy.get("#ctl00_ContentPlaceholder1_RadDropDownProducts").click();
    cy.get(".rddlItem").contains("Teatime Chocolate Biscuits").click();
  });

  it("Handling multi select Drop down element", () => {
    //to handle basic Check Box
    cy.visit("https://demo.mobiscroll.com/javascript/select/multiple-select");
    cy.get("#multiple-select-input").click({ force: true });
    cy.get(
      "div[class='mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi']"
    )
      .contains("Electronics & Computers")
      .click();
    cy.get(
      "div[class='mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi']"
    )
      .contains("Health & Beauty")
      .click();
  });
});
