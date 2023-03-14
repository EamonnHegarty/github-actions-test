describe("My test suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("My test", () => {
    cy.location("pathname").should("eq", "/");
  });
});
