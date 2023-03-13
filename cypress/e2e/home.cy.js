describe("Home Page tests", () => {
  let url = "http://localhost:3000";
  it("Correctly visits the Home page", () => {
    cy.visit(url);
    cy.location("pathname").should("eq", "/");
  });

  it("Correctly visits the EMEA BIP page", () => {
    cy.visit(`${url}/emea`);
    cy.location("pathname").should("eq", "/emea");
  });

  it("Correctly visits the About Us page", () => {
    cy.visit(`${url}/about`);
    cy.location("pathname").should("eq", "/about");
  });
});
