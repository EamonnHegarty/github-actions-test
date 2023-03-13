describe("My test suite", () => {
  it("My test", () => {
    const baseUrl = Cypress.env("baseUrl");
    cy.visit(baseUrl);
    // more test steps here
  });
});
