describe("My test suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it(`My test ${Cypress.env("WEB_APP_ENV")}`, () => {
    cy.location("pathname").should("eq", "/");
  });
});
