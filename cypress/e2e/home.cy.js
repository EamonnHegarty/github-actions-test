describe("My test suite", () => {
  beforeEach(() => {
    cy.visit("/", {
      auth: {
        username: "ehegarty@coca-cola.com",
        password: "Carndonagh_Donegal1996!",
      },
    });
  });
  it("My test", () => {
    cy.location("pathname").should("eq", "/");
  });
});
