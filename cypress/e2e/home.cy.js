describe("Home Page tests", () => {
  it("Correctly visits the Home page", () => {
    cy.visit(Cypress.env("BASE_URL"));
    cy.location("pathname").should("eq", "/");
  });

  it("Correctly visits the EMEA BIP page", () => {
    cy.visit(`${Cypress.env("BASE_URL")}/emea`);
    cy.location("pathname").should("eq", "/emea");
  });

  it("Correctly visits the About Us page", () => {
    cy.visit(`${Cypress.env("BASE_URL")}/about`);
    cy.location("pathname").should("eq", "/about");
  });
});
