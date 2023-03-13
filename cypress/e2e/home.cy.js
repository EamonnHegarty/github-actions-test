describe("Home Page tests", () => {
  const BASE_URL = Cypress.env("BASE_URL");

  it(`Correctly visits the Home page - ${BASE_URL}`, () => {
    cy.visit(BASE_URL);
    cy.location("pathname").should("eq", "/");
  });

  it("Correctly visits the EMEA BIP page", () => {
    cy.visit(`${BASE_URL}/emea`);
    cy.location("pathname").should("eq", "/emea");
  });

  it("Correctly visits the About Us page", () => {
    cy.visit(`${BASE_URL}/about`);
    cy.location("pathname").should("eq", "/about");
  });
});
