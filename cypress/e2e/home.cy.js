describe("My test suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it(`My test ${process.env.WEB_APP}`, () => {
    cy.location("pathname").should("eq", "/");
  });
});
