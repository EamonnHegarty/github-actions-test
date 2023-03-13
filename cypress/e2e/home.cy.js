describe("Home Page tests", () => {
  const URL = `${Cypress.config("baseUrl")}**`;

  it(`Correctly visits the Home page - ${URL}`, () => {
    cy.visit(URL);
    cy.location("pathname").should("eq", "/");
  });

  it("Correctly visits the EMEA BIP page", () => {
    cy.visit(`${URL}/emea`);
    cy.location("pathname").should("eq", "/emea");
  });

  it("Correctly visits the About Us page", () => {
    cy.visit(`${URL}/about`);
    cy.location("pathname").should("eq", "/about");
  });
});
