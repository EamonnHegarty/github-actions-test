const { getUrlForEnvironment } = require("../support/utils");

describe("Home Page tests - dev", () => {
  it("Correctly visits the Home page", () => {
    const url = getUrlForEnvironment(process.env.APP_ENV || "dev");
    cy.visit(url);
    cy.location("pathname").should("eq", "/");
  });
});
