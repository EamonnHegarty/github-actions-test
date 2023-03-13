import { getUrlForEnvironment } from "../support/utils";

describe("Home Page tests - dev", () => {
  const url = getUrlForEnvironment(process.env.APP_ENV || "dev");
  it(`Correctly visits the Home page:  ${url}`, () => {
    cy.visit(url);
    console.log(url);
    cy.location("pathname").should("eq", "/");
  });
});
