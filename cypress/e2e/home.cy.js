describe("My test suite", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("APP_URL"));
  });
  it("My test", () => {
    cy.location("pathname").should("eq", "/");
  });
});
