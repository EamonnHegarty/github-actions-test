describe("Home Page tests", () => {
  it("Correctly visits the Home page", () => {
    const myUrl = Cypress.env("MY_URL");
    cy.visit(myUrl);
    cy.location("pathname").should("eq", "/");
  });
});
