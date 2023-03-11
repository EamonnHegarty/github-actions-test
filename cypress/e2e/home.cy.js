describe("Home Page tests - dev", () => {
  it("Correctly visits the Home page", () => {
    cy.visit("https://aswa-tccc-bib-dev-pyth-01.azurewebsites.net/");
    cy.location("pathname").should("eq", "/");
  });
  it("Correctly visits the About page", () => {
    cy.visit("https://aswa-tccc-bib-dev-pyth-01.azurewebsites.net/about");
    cy.location("pathname").should("eq", "/about");
  });
});
