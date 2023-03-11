describe("Home Page tests - dev", () => {
  it("Correctly visits the Home page", () => {
    cy.visit("http://localhost:3000");
    cy.location("pathname").should("eq", "/");
  });
  it("Correctly visits the About page", () => {
    cy.visit("http://localhost:3000/about");
    cy.location("pathname").should("eq", "/about");
  });
});
