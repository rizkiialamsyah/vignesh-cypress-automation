/// <reference types="Cypress" />

describe("Advanced UI Elements", function () {
  it("Web Tables", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");

    // 1. check value present anywhere in the table

    cy.get("#table1")
      .contains("td", "http://www.frank.com")
      .should("be.visible");

    // 2. check value on a certain row and col
    cy.get("#table1>tbody>tr:nth-child(1)>td:nth-child(3)")
      .contains("td", "jsmith@gmail.com")
      .should("be.visible");

    // 3. Check value based on condition
    cy.get("#table1>tbody>tr>td:nth-child(2)").each(($el, index, $list) => {
      const fName = $el.text();
      if (fName.includes("Jason")) {
        cy.get("#table1>tbody>tr>td:nth-child(4)")
          .eq(index)
          .then(($due) => {
            const dueAmount = $due.text();
            expect(dueAmount).to.equal("$100.00");
          });
      }
    });
  });
});
